import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { PatientPortalService } from './patient-portal.service';

@ApiTags('patients')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
// Patient records are clinical data — restrict to staff roles by default.
@Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE, Role.FRONT_DESK)
@Controller('patients')
export class PatientsController {
  constructor(
    private patientsService: PatientsService,
    private patientPortalService: PatientPortalService,
  ) {}

  @Post()
  @Roles(Role.ADMIN, Role.FRONT_DESK)
  @ApiOperation({ summary: 'Create a patient record' })
  @ApiCreatedResponse({ description: 'Patient record created successfully' })
  @ApiConflictResponse({
    description: 'A patient with the supplied patient ID already exists',
  })
  create(@Body() dto: CreatePatientDto) {
    return this.patientsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all patient records' })
  @ApiOkResponse({ description: 'Patient records returned successfully' })
  findAll() {
    return this.patientsService.findAll();
  }

  @Get('me')
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get the authenticated patient profile' })
  getMyProfile(@CurrentUser() user: { userId: string }) {
    return this.patientPortalService.getProfile(user.userId);
  }

  @Get('me/appointments')
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get appointments for the authenticated patient' })
  getMyAppointments(@CurrentUser() user: { userId: string }) {
    return this.patientPortalService.getAppointments(user.userId);
  }

  @Get('me/prescriptions')
  @Roles(Role.PATIENT)
  @ApiOperation({ summary: 'Get prescriptions for the authenticated patient' })
  getMyPrescriptions(@CurrentUser() user: { userId: string }) {
    return this.patientPortalService.getPrescriptions(user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a patient record by its internal UUID' })
  @ApiOkResponse({ description: 'Patient record returned successfully' })
  @ApiNotFoundResponse({ description: 'Patient record not found' })
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE, Role.FRONT_DESK)
  update(@Param('id') id: string, @Body() dto: UpdatePatientDto) {
    return this.patientsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
