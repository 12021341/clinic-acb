import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

export class PrescriptionMedicationDto {
  @IsString() medication: string;
  @IsString() dosage: string;
  @IsString() instructions: string;
  @IsInt() @Min(1) quantity: number;
  @IsOptional() @IsInt() @Min(0) refills?: number;
  @IsOptional() @IsString() notes?: string;
}

export class CreatePrescriptionBatchDto {
  @IsUUID()
  patientId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PrescriptionMedicationDto)
  medications: PrescriptionMedicationDto[];
}
