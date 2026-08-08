import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { CreatePrescriptionBatchDto } from './dto/create-prescription-batch.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';

@Injectable()
export class PrescriptionsService {
  constructor(private prisma: PrismaService) {}
  async create(doctorId: string, dto: CreatePrescriptionDto) {
    if (!await this.prisma.patient.findUnique({ where: { id: dto.patientId }, select: { id: true } })) throw new NotFoundException('Patient not found');
    return this.prisma.prescription.create({ data: { ...dto, doctorId }, include: this.include });
  }
  async createBatch(doctorId: string, dto: CreatePrescriptionBatchDto) {
    if (!await this.prisma.patient.findUnique({ where: { id: dto.patientId }, select: { id: true } })) throw new NotFoundException('Patient not found');
    return this.prisma.$transaction(
      dto.medications.map(medication => this.prisma.prescription.create({
        data: { ...medication, patientId: dto.patientId, doctorId },
        include: this.include,
      })),
    );
  }
  findAll(filters: { patientId?: string; doctorId?: string } = {}) {
    return this.prisma.prescription.findMany({
      where: filters,
      orderBy: [
        { patient: { lastName: 'asc' } },
        { patient: { firstName: 'asc' } },
        { issuedAt: 'desc' },
      ],
      include: this.include,
    });
  }
  async findOne(id: string) {
    const item = await this.prisma.prescription.findUnique({ where: { id }, include: this.include });
    if (!item) throw new NotFoundException('Prescription not found');
    return item;
  }
  async update(id: string, dto: UpdatePrescriptionDto) { await this.findOne(id); return this.prisma.prescription.update({ where: { id }, data: dto, include: this.include }); }
  private readonly include = { patient: { select: { id: true, patientId: true, firstName: true, lastName: true, allergies: true } }, doctor: { select: { id: true, firstName: true, lastName: true } } } as const;
}
