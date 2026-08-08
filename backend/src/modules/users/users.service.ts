import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const USER_SELECT = { id: true, email: true, firstName: true, lastName: true, role: true, isActive: true, createdAt: true } as const;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        // passwordHash and refreshToken are intentionally excluded
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
    });
  }

  async findDoctors() {
    return this.prisma.user.findMany({
      where: { role: 'DOCTOR', isActive: true },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
      orderBy: [{ lastName: 'asc' }, { firstName: 'asc' }],
    });
  }

  async create(dto: CreateUserDto) {
    if (await this.prisma.user.findUnique({ where: { email: dto.email } })) throw new ConflictException('An account with this email already exists');
    return this.prisma.user.create({
      data: { email: dto.email, firstName: dto.firstName, lastName: dto.lastName, role: dto.role, passwordHash: await bcrypt.hash(dto.password, 12) },
      select: USER_SELECT,
    });
  }

  async update(id: string, dto: UpdateUserDto) {
    await this.findById(id);
    return this.prisma.user.update({ where: { id }, data: dto, select: USER_SELECT });
  }

  async remove(id: string) {
    await this.findById(id);
    return this.prisma.user.update({ where: { id }, data: { isActive: false }, select: USER_SELECT });
  }
}
