import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedicalCertificateDto } from './dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from './dto/update-medical-certificate.dto';

@Injectable()
export class MedicalCertificatesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(doctorId: string, dto: CreateMedicalCertificateDto) {
    if (dto.patientId) await this.requirePatient(dto.patientId);
    return this.prisma.medicalCertificate.create({
      data: {
        ...dto,
        patientName: dto.patientName.trim(),
        details: dto.details.trim(),
        certificateDate: new Date(dto.certificateDate),
        doctorId,
      },
      include: this.include,
    });
  }

  findAll(filters: { patientId?: string; doctorId?: string } = {}) {
    return this.prisma.medicalCertificate.findMany({
      where: filters,
      orderBy: [{ certificateDate: 'desc' }, { createdAt: 'desc' }],
      include: this.include,
    });
  }

  async findOne(id: string) {
    const certificate = await this.prisma.medicalCertificate.findUnique({ where: { id }, include: this.include });
    if (!certificate) throw new NotFoundException('Medical certificate not found');
    return certificate;
  }

  async update(id: string, dto: UpdateMedicalCertificateDto) {
    await this.findOne(id);
    if (dto.patientId) await this.requirePatient(dto.patientId);
    return this.prisma.medicalCertificate.update({
      where: { id },
      data: {
        ...dto,
        ...(dto.patientName !== undefined && { patientName: dto.patientName.trim() }),
        ...(dto.details !== undefined && { details: dto.details.trim() }),
        ...(dto.certificateDate !== undefined && { certificateDate: new Date(dto.certificateDate) }),
      },
      include: this.include,
    });
  }

  private async requirePatient(patientId: string): Promise<void> {
    const patient = await this.prisma.patient.findUnique({ where: { id: patientId }, select: { id: true } });
    if (!patient) throw new NotFoundException('Patient not found');
  }

  private readonly include = {
    patient: { select: { id: true, patientId: true, firstName: true, lastName: true } },
    doctor: { select: { id: true, firstName: true, lastName: true } },
  } as const;
}
