import { NotFoundException } from '@nestjs/common';
import { MedicalCertificatesService } from './medical-certificates.service';

describe('MedicalCertificatesService', () => {
  const prisma = {
    patient: { findUnique: jest.fn() },
    medicalCertificate: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  } as any;
  const service = new MedicalCertificatesService(prisma);

  beforeEach(() => jest.clearAllMocks());

  it('saves a free-text patient certificate without a patient link', async () => {
    prisma.medicalCertificate.create.mockResolvedValue({ id: 'certificate-1' });

    await service.create('doctor-1', {
      patientName: 'Walk-in Patient',
      certificateDate: '2026-08-09',
      details: 'Fit to return to school.',
    });

    expect(prisma.patient.findUnique).not.toHaveBeenCalled();
    expect(prisma.medicalCertificate.create).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({
        doctorId: 'doctor-1',
        patientName: 'Walk-in Patient',
        certificateDate: new Date('2026-08-09'),
      }),
    }));
  });

  it('rejects a linked certificate when the patient does not exist', async () => {
    prisma.patient.findUnique.mockResolvedValue(null);

    await expect(service.create('doctor-1', {
      patientId: '32d4ae9c-f787-4dd4-809e-0ae21acb86c4',
      patientName: 'Missing Patient',
      certificateDate: '2026-08-09',
      details: 'Certificate details.',
    })).rejects.toBeInstanceOf(NotFoundException);
  });
});
