import { IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreatePrescriptionDto {
  @IsUUID() patientId: string;
  @IsString() medication: string;
  @IsString() dosage: string;
  @IsString() instructions: string;
  @IsInt() @Min(1) quantity: number;
  @IsOptional() @IsInt() @Min(0) refills?: number;
  @IsOptional() @IsString() notes?: string;
}
