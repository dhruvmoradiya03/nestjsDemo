import { Body, Injectable, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
 
  async login( loginDto: any) {
    const user = await this.userService.findbyName(loginDto.name);
    if (user) {
      if (user.password == loginDto.password) {
        return user;
      }
      return 'password is wrong';
    }
  }
}
