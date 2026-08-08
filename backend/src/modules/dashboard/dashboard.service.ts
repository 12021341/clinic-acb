import { Injectable } from '@nestjs/common';
import { AppointmentStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async getSummary(day = new Date()) {
    const start = new Date(day); start.setHours(0, 0, 0, 0);
    const end = new Date(start); end.setDate(end.getDate() + 1);
    const [appointments, checkedIn, prescriptions, totalPatients, schedule, recentPatients] = await Promise.all([
      this.prisma.appointment.count({ where: { scheduledAt: { gte: start, lt: end }, status: { not: AppointmentStatus.CANCELLED } } }),
      this.prisma.appointment.count({ where: { scheduledAt: { gte: start, lt: end }, status: { in: [AppointmentStatus.CONFIRMED, AppointmentStatus.COMPLETED] } } }),
      this.prisma.prescription.count({ where: { issuedAt: { gte: start, lt: end } } }),
      this.prisma.patient.count(),
      this.prisma.appointment.findMany({ where: { scheduledAt: { gte: start, lt: end }, status: { not: AppointmentStatus.CANCELLED } }, orderBy: { scheduledAt: 'asc' }, include: { patient: true, doctor: { select: { id: true, firstName: true, lastName: true } } } }),
      this.prisma.patient.findMany({ take: 5, orderBy: { updatedAt: 'desc' } }),
    ]);
    return { date: start.toISOString().slice(0, 10), stats: { appointments, checkedIn, prescriptions, totalPatients }, schedule, recentPatients };
  }
}
