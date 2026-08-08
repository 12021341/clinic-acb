import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAppointmentDto) {
    const duration = dto.durationMin ?? 30;
    const start = this.toScheduledAt(dto.date, dto.time);
    const end = new Date(start.getTime() + duration * 60_000);

    await this.assertNoOverlap(dto.assignedDoctorId, start, end);

    return this.prisma.appointment.create({
      data: {
        patientId: dto.patientId,
        doctorId: dto.assignedDoctorId,
        scheduledAt: start,
        date: new Date(`${dto.date}T00:00:00.000Z`),
        time: dto.time,
        visitType: dto.visitType,
        purpose: dto.purpose,
        durationMin: duration,
      },
      include: {
        patient: true,
        doctor: {
          select: { id: true, firstName: true, lastName: true },
        },
      },
    });
  }

  findAll(filters?: { doctorId?: string; patientId?: string }) {
    return this.prisma.appointment.findMany({
      where: {
        doctorId: filters?.doctorId,
        patientId: filters?.patientId,
      },
      orderBy: { scheduledAt: 'asc' },
      include: { patient: true, doctor: { select: { id: true, firstName: true, lastName: true } } },
    });
  }

  async findOne(id: string) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: { patient: true, doctor: { select: { id: true, firstName: true, lastName: true } } },
    });
    if (!appointment) throw new NotFoundException('Appointment not found');
    return appointment;
  }

  async update(id: string, dto: UpdateAppointmentDto) {
    const existing = await this.findOne(id);

    // Only re-check overlap if the time, doctor, or duration actually changed
    if (dto.date || dto.time || dto.assignedDoctorId || dto.durationMin) {
      const date = dto.date ?? existing.date.toISOString().slice(0, 10);
      const time = dto.time ?? existing.time;
      const start = this.toScheduledAt(date, time);
      const duration = dto.durationMin ?? existing.durationMin;
      const end = new Date(start.getTime() + duration * 60_000);
      const doctorId = dto.assignedDoctorId ?? existing.doctorId;
      await this.assertNoOverlap(doctorId, start, end, id);
    }

    return this.prisma.appointment.update({
      where: { id },
      data: {
        patientId: dto.patientId,
        doctorId: dto.assignedDoctorId,
        date: dto.date
          ? new Date(`${dto.date}T00:00:00.000Z`)
          : undefined,
        time: dto.time,
        scheduledAt:
          dto.date || dto.time
            ? this.toScheduledAt(
                dto.date ?? existing.date.toISOString().slice(0, 10),
                dto.time ?? existing.time,
              )
            : undefined,
        visitType: dto.visitType,
        purpose: dto.purpose,
        durationMin: dto.durationMin,
        status: dto.status,
        notes: dto.notes,
      },
    });
  }

  async cancel(id: string) {
    await this.findOne(id);
    return this.prisma.appointment.update({
      where: { id },
      data: { status: AppointmentStatus.CANCELLED },
    });
  }

  // Prevents a doctor from being booked twice for overlapping time slots.
  // excludeId is used when updating an existing appointment so it doesn't
  // conflict with itself.
  private async assertNoOverlap(
    doctorId: string,
    start: Date,
    end: Date,
    excludeId?: string,
  ) {
    // Prisma can't compare scheduledAt + durationMin in a single where clause,
    // so fetch same-doctor candidates that could possibly overlap (anything
    // starting before our end time, within a reasonable lookback window),
    // then refine precisely in JS. Fine at this scale; move to a DB-level
    // exclusion constraint (Postgres tstzrange + GIST) if volume grows a lot.
    const candidates = await this.prisma.appointment.findMany({
      where: {
        doctorId,
        id: excludeId ? { not: excludeId } : undefined,
        status: { notIn: [AppointmentStatus.CANCELLED, AppointmentStatus.NO_SHOW] },
        scheduledAt: { lt: end, gte: new Date(start.getTime() - 24 * 60 * 60_000) },
      },
    });

    const hasOverlap = candidates.some((c) => {
      const cEnd = new Date(c.scheduledAt.getTime() + c.durationMin * 60_000);
      return c.scheduledAt < end && cEnd > start;
    });

    if (hasOverlap) {
      throw new ConflictException(
        'This doctor already has an appointment overlapping this time slot',
      );
    }
  }

  private toScheduledAt(date: string, time: string) {
    return new Date(`${date}T${time}:00+08:00`);
  }
}
