import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateVaccineRecordDto {
  @IsUUID()
  patientId: string;

  @IsString()
  vaccineName: string;

  @IsString()
  dose: string;

  @IsDateString()
  dateAdministered: string;

  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsString()
  administeredBy: string;

  @IsString()
  status: string;
}
