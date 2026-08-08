import {
  IsDateString,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreatePatientDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsString()
  patientId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDateString()
  dateOfBirth: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  age?: number;

  @IsOptional()
  @IsString()
  sex?: string;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsEmail()
  emailAddress?: string;

  @IsOptional()
  @IsString()
  homeAddress?: string;

  @IsOptional()
  @IsString()
  fatherName?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  fatherAge?: number;

  @IsOptional()
  @IsString()
  fatherOccupation?: string;

  @IsOptional()
  @IsString()
  fatherContactNumber?: string;

  @IsOptional()
  @IsString()
  motherName?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(150)
  motherAge?: number;

  @IsOptional()
  @IsString()
  motherOccupation?: string;

  @IsOptional()
  @IsString()
  motherContactNumber?: string;

  @IsOptional()
  @IsString()
  emergencyContactName?: string;

  @IsOptional()
  @IsString()
  emergencyContactRelationship?: string;

  @IsOptional()
  @IsString()
  emergencyContactNumber?: string;

  @IsOptional()
  @IsString()
  emergencyPreferredHospital?: string;

  @IsOptional()
  @IsString()
  bloodType?: string;

  @IsOptional()
  @IsString()
  philHealthInsuranceId?: string;

  @IsOptional()
  @IsString()
  allergies?: string;

  @IsOptional()
  @IsString()
  conditions?: string;
}
