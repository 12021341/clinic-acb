import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVaccineRecordDto } from './dto/create-vaccine-record.dto';

@Injectable()
export class VaccinesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateVaccineRecordDto) {
    const patient = await this.prisma.patient.findUnique({
      where: { id: dto.patientId },
      select: { id: true },
    });

    if (!patient) {
      throw new NotFoundException('Patient not found');
    }

    return this.prisma.vaccineRecord.create({
      data: {
        ...dto,
        dateAdministered: new Date(
          `${dto.dateAdministered}T00:00:00.000Z`,
        ),
      },
      include: { patient: { select: this.patientSummary } },
    });
  }

  findAll(patientId?: string) {
    return this.prisma.vaccineRecord.findMany({
      where: { patientId },
      orderBy: { dateAdministered: 'desc' },
      include: { patient: { select: this.patientSummary } },
    });
  }

  async findOne(id: string) {
    const vaccineRecord = await this.prisma.vaccineRecord.findUnique({
      where: { id },
      include: { patient: { select: this.patientSummary } },
    });

    if (!vaccineRecord) {
      throw new NotFoundException('Vaccine record not found');
    }

    return vaccineRecord;
  }

  private readonly patientSummary = {
    id: true,
    patientId: true,
    firstName: true,
    lastName: true,
  } as const;
}
