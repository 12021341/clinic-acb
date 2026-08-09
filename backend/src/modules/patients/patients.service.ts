import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePatientDto) {
    try {
      return await this.prisma.patient.create({
        data: { ...dto, dateOfBirth: new Date(dto.dateOfBirth) },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `A patient with patient ID "${dto.patientId}" already exists`,
        );
      }

      throw error;
    }
  }

  async findAll() {
    const patients = await this.prisma.patient.findMany({
      orderBy: { lastName: 'asc' },
      include: {
        appointments: {
          where: { status: 'COMPLETED' },
          orderBy: { scheduledAt: 'desc' },
          take: 1,
          select: { scheduledAt: true },
        },
      },
    });

    return patients.map(({ appointments, ...patient }) => ({
      ...patient,
      lastCheckupDate: appointments[0]?.scheduledAt ?? null,
    }));
  }

  async findOne(id: string) {
    const patient = await this.prisma.patient.findUnique({ where: { id } });
    if (!patient) throw new NotFoundException('Patient not found');
    return patient;
  }

  async update(id: string, dto: UpdatePatientDto) {
    await this.findOne(id); // 404s early if missing
    return this.prisma.patient.update({
      where: { id },
      data: {
        ...dto,
        dateOfBirth: dto.dateOfBirth ? new Date(dto.dateOfBirth) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.patient.delete({ where: { id } });
  }
}
