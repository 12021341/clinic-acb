import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  it('returns the UI dashboard in one aggregate response', async () => {
    const prisma = {
      appointment: { count: jest.fn().mockResolvedValue(12), findMany: jest.fn().mockResolvedValue([]) },
      prescription: { count: jest.fn().mockResolvedValue(6) },
      patient: { count: jest.fn().mockResolvedValue(42), findMany: jest.fn().mockResolvedValue([]) },
    } as any;
    const service = new DashboardService(prisma);
    const result = await service.getSummary(new Date('2026-07-11T00:00:00+08:00'));
    expect(result.stats).toEqual(expect.objectContaining({ appointments: 12, prescriptions: 6, totalPatients: 42 }));
    expect(result).toEqual(expect.objectContaining({ schedule: [], recentPatients: [] }));
  });
});
