import { IsDateString, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterPatientDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDateString()
  dateOfBirth: string;

  @IsOptional() @IsString() sex?: string;
  @IsOptional() @IsString() mobileNumber?: string;
  @IsOptional() @IsString() homeAddress?: string;
  @IsOptional() @IsString() emergencyContactName?: string;
  @IsOptional() @IsString() emergencyContactRelationship?: string;
  @IsOptional() @IsString() emergencyContactNumber?: string;
  @IsOptional() @IsString() bloodType?: string;
  @IsOptional() @IsString() philHealthInsuranceId?: string;
  @IsOptional() @IsString() allergies?: string;
  @IsOptional() @IsString() conditions?: string;
}
