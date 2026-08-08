import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientPortalService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const patient = await this.prisma.patient.findUnique({ where: { userId } });
    if (!patient) throw new NotFoundException('Patient profile is not linked to this account');
    return patient;
  }

  async getAppointments(userId: string) {
    const patient = await this.getPatientIdentity(userId);
    return this.prisma.appointment.findMany({
      where: { patientId: patient.id },
      orderBy: { scheduledAt: 'desc' },
      include: { doctor: { select: { id: true, firstName: true, lastName: true } } },
    });
  }

  async getPrescriptions(userId: string) {
    const patient = await this.getPatientIdentity(userId);
    return this.prisma.prescription.findMany({
      where: { patientId: patient.id },
      orderBy: { issuedAt: 'desc' },
      include: { doctor: { select: { id: true, firstName: true, lastName: true } } },
    });
  }

  private async getPatientIdentity(userId: string) {
    const patient = await this.prisma.patient.findUnique({
      where: { userId },
      select: { id: true },
    });
    if (!patient) throw new NotFoundException('Patient profile is not linked to this account');
    return patient;
  }
}
