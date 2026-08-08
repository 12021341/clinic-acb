import { NotFoundException } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';

describe('PrescriptionsService', () => {
  const prisma = {
    patient: { findUnique: jest.fn() },
    user: { findFirst: jest.fn() },
    prescription: { create: jest.fn(), findMany: jest.fn(), findUnique: jest.fn(), update: jest.fn() },
    $transaction: jest.fn(),
  } as any;
  const service = new PrescriptionsService(prisma);

  beforeEach(() => jest.clearAllMocks());

  it('rejects a prescription when the patient does not exist', async () => {
    prisma.patient.findUnique.mockResolvedValue(null);
    await expect(service.create('doctor-1', { patientId: 'patient-1', medication: 'Amoxicillin', dosage: '500 mg', instructions: 'Every 8 hours', quantity: 21 })).rejects.toBeInstanceOf(NotFoundException);
  });

  it('scopes list results by patient when requested', async () => {
    prisma.prescription.findMany.mockResolvedValue([]);
    await service.findAll({ patientId: 'patient-1' });
    expect(prisma.prescription.findMany).toHaveBeenCalledWith(expect.objectContaining({ where: { patientId: 'patient-1' } }));
  });

  it('creates multiple medications in one transaction', async () => {
    prisma.patient.findUnique.mockResolvedValue({ id: 'patient-1' });
    prisma.prescription.create.mockReturnValue({});
    prisma.$transaction.mockResolvedValue([{ id: 'rx-1' }, { id: 'rx-2' }]);
    const result = await service.createBatch('doctor-1', {
      patientId: 'patient-1',
      medications: [
        { medication: 'Medicine A', dosage: '10 mg', instructions: 'Daily', quantity: 10 },
        { medication: 'Medicine B', dosage: '20 mg', instructions: 'Twice daily', quantity: 20 },
      ],
    });
    expect(prisma.$transaction).toHaveBeenCalledWith(expect.any(Array));
    expect(prisma.prescription.create).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);
  });
});
