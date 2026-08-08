import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';

jest.mock('bcrypt', () => ({ hash: jest.fn().mockResolvedValue('hashed') }));

describe('UsersService', () => {
  const prisma = { user: { create: jest.fn(), update: jest.fn(), findUnique: jest.fn() } } as any;
  const service = new UsersService(prisma);

  beforeEach(() => jest.clearAllMocks());

  it('creates an administrator-managed user with a hashed temporary password', async () => {
    prisma.user.findUnique.mockResolvedValue(null);
    prisma.user.create.mockResolvedValue({ id: 'user-1' });

    await service.create({ email: 'doctor@clinic.test', firstName: 'Ana', lastName: 'Reyes', role: Role.DOCTOR, password: 'Temporary1!' });

    expect(bcrypt.hash).toHaveBeenCalledWith('Temporary1!', 12);
    expect(prisma.user.create).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ passwordHash: 'hashed', role: Role.DOCTOR }) }));
  });

  it('deactivates a user instead of deleting their audit history', async () => {
    prisma.user.findUnique.mockResolvedValue({ id: 'user-1' });
    prisma.user.update.mockResolvedValue({ id: 'user-1', isActive: false });
    await service.remove('user-1');
    expect(prisma.user.update).toHaveBeenCalledWith(expect.objectContaining({ data: { isActive: false } }));
  });
});
