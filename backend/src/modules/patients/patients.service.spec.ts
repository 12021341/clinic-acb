import { PatientsService } from './patients.service';

describe('PatientsService', () => {
  const prisma = {
    patient: { findMany: jest.fn() },
  } as any;
  const service = new PatientsService(prisma);

  beforeEach(() => jest.clearAllMocks());

  it('returns the latest completed appointment as the last checkup date', async () => {
    const scheduledAt = new Date('2026-08-01T09:00:00.000Z');
    prisma.patient.findMany.mockResolvedValue([
      { id: 'patient-1', firstName: 'Juan', lastName: 'Dela Cruz', appointments: [{ scheduledAt }] },
      { id: 'patient-2', firstName: 'Ana', lastName: 'Santos', appointments: [] },
    ]);

    const result = await service.findAll();

    expect(prisma.patient.findMany).toHaveBeenCalledWith(expect.objectContaining({
      include: {
        appointments: expect.objectContaining({ where: { status: 'COMPLETED' }, take: 1 }),
      },
    }));
    expect(result[0].lastCheckupDate).toEqual(scheduledAt);
    expect(result[1].lastCheckupDate).toBeNull();
    expect(result[0]).not.toHaveProperty('appointments');
  });
});
