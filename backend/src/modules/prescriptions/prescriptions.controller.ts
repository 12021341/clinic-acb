import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { CreatePrescriptionBatchDto } from './dto/create-prescription-batch.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import { PrescriptionsService } from './prescriptions.service';

@Controller('prescriptions') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE)
export class PrescriptionsController {
  constructor(private service: PrescriptionsService) {}
  @Post('batch') createBatch(@CurrentUser() user: { userId: string }, @Body() dto: CreatePrescriptionBatchDto) { return this.service.createBatch(user.userId, dto); }
  @Post() create(@CurrentUser() user: { userId: string }, @Body() dto: CreatePrescriptionDto) { return this.service.create(user.userId, dto); }
  @Get() findAll(@Query('patientId') patientId?: string, @Query('doctorId') doctorId?: string) { return this.service.findAll({ patientId, doctorId }); }
  @Get(':id') findOne(@Param('id') id: string) { return this.service.findOne(id); }
  @Patch(':id') update(@Param('id') id: string, @Body() dto: UpdatePrescriptionDto) { return this.service.update(id, dto); }
}
