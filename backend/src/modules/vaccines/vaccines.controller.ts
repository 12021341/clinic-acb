import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreateVaccineRecordDto } from './dto/create-vaccine-record.dto';
import { VaccinesService } from './vaccines.service';

@ApiTags('vaccines')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE, Role.FRONT_DESK)
@Controller('vaccines')
export class VaccinesController {
  constructor(private vaccinesService: VaccinesService) {}

  @Post()
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
  @ApiOperation({ summary: 'Add a patient vaccine record' })
  @ApiCreatedResponse({ description: 'Vaccine record created successfully' })
  @ApiNotFoundResponse({ description: 'Patient not found' })
  create(@Body() dto: CreateVaccineRecordDto) {
    return this.vaccinesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'View vaccine records' })
  @ApiOkResponse({ description: 'Vaccine records returned successfully' })
  findAll(
    @Query('patientId', new ParseUUIDPipe({ optional: true }))
    patientId?: string,
  ) {
    return this.vaccinesService.findAll(patientId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'View one vaccine record' })
  @ApiOkResponse({ description: 'Vaccine record returned successfully' })
  @ApiNotFoundResponse({ description: 'Vaccine record not found' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vaccinesService.findOne(id);
  }
}
