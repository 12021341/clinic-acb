import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  // Only an ADMIN-invoked endpoint should allow setting this to staff roles;
  // public self-registration should force PATIENT regardless of input.
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
