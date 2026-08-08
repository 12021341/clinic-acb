import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreatePrescriptionDto } from './create-prescription.dto';
export class UpdatePrescriptionDto extends PartialType(CreatePrescriptionDto) { @IsOptional() @IsString() status?: string; }
