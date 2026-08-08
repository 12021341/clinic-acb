import { ConflictException } from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed-value'),
  compare: jest.fn(),
}));

describe('AuthService patient registration', () => {
  const transaction = {
    user: { create: jest.fn() },
    patient: { create: jest.fn() },
  };
  const prisma = {
    user: { findUnique: jest.fn(), update: jest.fn() },
    $transaction: jest.fn((callback: (tx: typeof transaction) => unknown) => callback(transaction)),
  } as any;
  const jwt = { sign: jest.fn().mockReturnValueOnce('access').mockReturnValue('refresh') } as any;
  const service = new AuthService(prisma, jwt);

  beforeEach(() => {
    jest.clearAllMocks();
    jwt.sign.mockReset().mockReturnValueOnce('access').mockReturnValueOnce('refresh');
  });

  it('creates a PATIENT account and linked profile in one transaction', async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    transaction.user.create.mockResolvedValue({ id: 'user-1', email: 'maria@example.com', role: Role.PATIENT });
    transaction.patient.create.mockResolvedValue({ id: 'patient-1', patientId: 'PT-ABC12345' });
    prisma.user.update.mockResolvedValue({});

    const result = await service.registerPatient({
      email: 'maria@example.com', password: 'Password1!', firstName: 'Maria',
      lastName: 'Santos', dateOfBirth: '1990-01-02', sex: 'Female',
    });

    expect(transaction.user.create).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ role: Role.PATIENT }) }));
    expect(transaction.patient.create).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ userId: 'user-1', firstName: 'Maria', lastName: 'Santos' }) }));
    expect(result).toEqual(expect.objectContaining({ accessToken: 'access', refreshToken: 'refresh', patient: expect.objectContaining({ id: 'patient-1' }) }));
    expect(bcrypt.hash).toHaveBeenCalledWith('Password1!', 12);
  });

  it('rejects an email that already has an account', async () => {
    prisma.user.findUnique.mockResolvedValue({ id: 'existing' });
    await expect(service.registerPatient({
      email: 'maria@example.com', password: 'Password1!', firstName: 'Maria',
      lastName: 'Santos', dateOfBirth: '1990-01-02',
    })).rejects.toBeInstanceOf(ConflictException);
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
});
