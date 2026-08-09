import { IsDateString, IsOptional, IsString, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateMedicalCertificateDto {
  @IsOptional()
  @IsUUID()
  patientId?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200)
  patientName: string;

  @IsDateString()
  certificateDate: string;

  @IsString()
  @MinLength(1)
  @MaxLength(10000)
  details: string;
}
