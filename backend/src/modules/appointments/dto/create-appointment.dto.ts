import {
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Min,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  patientId: string;

  @IsUUID()
  assignedDoctorId: string;

  @IsDateString()
  date: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: 'time must use 24-hour HH:mm format',
  })
  time: string;

  @IsString()
  visitType: string;

  @IsString()
  purpose: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  durationMin?: number;
}
