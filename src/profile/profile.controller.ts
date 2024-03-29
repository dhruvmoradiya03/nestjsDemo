import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
export class ProfileController {
  @UseGuards(AuthGuard('Jwt'))
  @Get()
  Proutes() {
    return { message: 'You are accessing protected Routes' };
  }
}
