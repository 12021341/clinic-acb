import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { DashboardService } from './dashboard.service';
@Controller('dashboard') @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE, Role.FRONT_DESK)
export class DashboardController { constructor(private service: DashboardService) {} @Get() getSummary() { return this.service.getSummary(); } }
