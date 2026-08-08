import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import { randomUUID } from 'crypto';

const SALT_ROUNDS = 12;

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException('An account with this email already exists');
    }

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        firstName: dto.firstName,
        lastName: dto.lastName,
        // Public self-registration should always default to PATIENT;
        // only expose `role` on an admin-only "create staff user" endpoint.
        role: dto.role ?? Role.PATIENT,
      },
    });

    return this.issueTokens(user.id, user.email, user.role);
  }

  async registerPatient(dto: RegisterPatientDto) {
    const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existing) throw new ConflictException('An account with this email already exists');

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
    const patientId = `PT-${randomUUID().replace(/-/g, '').slice(0, 8).toUpperCase()}`;

    const registration = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: dto.email,
          passwordHash,
          firstName: dto.firstName,
          lastName: dto.lastName,
          role: Role.PATIENT,
        },
        select: { id: true, email: true, role: true },
      });

      const patient = await tx.patient.create({
        data: {
          userId: user.id,
          patientId,
          firstName: dto.firstName,
          lastName: dto.lastName,
          dateOfBirth: new Date(dto.dateOfBirth),
          emailAddress: dto.email,
          sex: dto.sex,
          mobileNumber: dto.mobileNumber,
          homeAddress: dto.homeAddress,
          emergencyContactName: dto.emergencyContactName,
          emergencyContactRelationship: dto.emergencyContactRelationship,
          emergencyContactNumber: dto.emergencyContactNumber,
          bloodType: dto.bloodType,
          philHealthInsuranceId: dto.philHealthInsuranceId,
          allergies: dto.allergies,
          conditions: dto.conditions,
        },
        select: { id: true, patientId: true, firstName: true, lastName: true },
      });

      return { user, patient };
    });

    const tokens = await this.issueTokens(
      registration.user.id,
      registration.user.email,
      registration.user.role,
    );
    return { ...tokens, patient: registration.patient };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user || !user.isActive) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.issueTokens(user.id, user.email, user.role);
  }

  async refresh(userId: string, refreshToken: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Access denied');
    }

    const tokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!tokenMatches) {
      throw new UnauthorizedException('Access denied');
    }

    return this.issueTokens(user.id, user.email, user.role);
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
  }

  private async issueTokens(userId: string, email: string, role: Role) {
    const payload = { sub: userId, email, role };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
    });

    // Store only a hash of the refresh token, never the raw value
    const refreshTokenHash = await bcrypt.hash(refreshToken, SALT_ROUNDS);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: refreshTokenHash },
    });

    return { accessToken, refreshToken };
  }
}
