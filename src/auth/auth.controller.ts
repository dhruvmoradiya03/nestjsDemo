import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  authenticate(@Body() loginDto: any) {
    return this.authService.login(loginDto);
  }
}
