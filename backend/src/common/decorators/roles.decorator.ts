import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const ROLES_KEY = 'roles';

// Usage: @Roles(Role.ADMIN, Role.DOCTOR) above a controller method
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
