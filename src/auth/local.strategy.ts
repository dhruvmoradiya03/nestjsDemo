import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Any } from 'typeorm';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'name' });
  }

  async validate(@Body() loginDto: any): Promise<any> {
    const user = await this.authService.login(loginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
