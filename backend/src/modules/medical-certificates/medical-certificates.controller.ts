import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CreateMedicalCertificateDto } from './dto/create-medical-certificate.dto';
import { UpdateMedicalCertificateDto } from './dto/update-medical-certificate.dto';
import { MedicalCertificatesService } from './medical-certificates.service';

@Controller('medical-certificates')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN, Role.DOCTOR)
export class MedicalCertificatesController {
  constructor(private readonly service: MedicalCertificatesService) {}

  @Post()
  create(@CurrentUser() user: { userId: string }, @Body() dto: CreateMedicalCertificateDto) {
    return this.service.create(user.userId, dto);
  }

  @Get()
  findAll(@Query('patientId') patientId?: string, @Query('doctorId') doctorId?: string) {
    return this.service.findAll({ patientId, doctorId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMedicalCertificateDto) {
    return this.service.update(id, dto);
  }
}
