import { Body, Injectable, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: any) {
    const user = await this.userService.findbyName(loginDto.name);
    const payload = { name: loginDto.name, id: loginDto.id };
    if (user) {
      if (user.password == loginDto.password) {
        return { access_token: await this.jwtService.signAsync(payload) };
      }
      return 'password is wrong';
    }
  }
}
