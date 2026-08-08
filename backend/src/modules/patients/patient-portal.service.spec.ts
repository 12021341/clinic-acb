import { NotFoundException } from '@nestjs/common';
import { PatientPortalService } from './patient-portal.service';

describe('PatientPortalService', () => {
  const prisma = {
    patient: { findUnique: jest.fn() },
    appointment: { findMany: jest.fn() },
    prescription: { findMany: jest.fn() },
  } as any;
  const service = new PatientPortalService(prisma);

  beforeEach(() => jest.clearAllMocks());

  it('loads the patient profile using only the authenticated user id', async () => {
    prisma.patient.findUnique.mockResolvedValue({ id: 'patient-1', userId: 'user-1' });
    await service.getProfile('user-1');
    expect(prisma.patient.findUnique).toHaveBeenCalledWith({ where: { userId: 'user-1' } });
  });

  it('rejects an account that has no linked patient profile', async () => {
    prisma.patient.findUnique.mockResolvedValue(null);
    await expect(service.getProfile('user-1')).rejects.toBeInstanceOf(NotFoundException);
  });

  it('scopes appointments to the authenticated user patient record', async () => {
    prisma.patient.findUnique.mockResolvedValue({ id: 'patient-1' });
    prisma.appointment.findMany.mockResolvedValue([]);
    await service.getAppointments('user-1');
    expect(prisma.appointment.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { patientId: 'patient-1' } }));
  });

  it('scopes prescriptions to the authenticated user patient record', async () => {
    prisma.patient.findUnique.mockResolvedValue({ id: 'patient-1' });
    prisma.prescription.findMany.mockResolvedValue([]);
    await service.getPrescriptions('user-1');
    expect(prisma.prescription.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { patientId: 'patient-1' } }));
  });
});
