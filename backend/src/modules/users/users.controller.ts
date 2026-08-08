import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  getProfile(@CurrentUser() user: { userId: string }) {
    return this.usersService.findById(user.userId);
  }

  @Get('doctors')
  @Roles(Role.ADMIN, Role.DOCTOR, Role.NURSE, Role.FRONT_DESK)
  findDoctors() {
    return this.usersService.findDoctors();
  }

  @Get()
  @Roles(Role.ADMIN)
  findAll() {
    return this.usersService.findAll();
  }

  @Post() @Roles(Role.ADMIN)
  create(@Body() dto: CreateUserDto) { return this.usersService.create(dto); }

  @Patch(':id') @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) { return this.usersService.update(id, dto); }

  @Delete(':id') @Roles(Role.ADMIN)
  remove(@Param('id') id: string) { return this.usersService.remove(id); }
}
