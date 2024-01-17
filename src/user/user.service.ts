import { Get, Injectable, Param, Patch, Post, Req } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { updateUserDto } from './update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
  }

  deliver(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  update(updateUserDto: updateUserDto, userID: number) {
    return this.userRepository.update(userID, updateUserDto);
  }

  show(userID: number) {
    return this.userRepository.findOne({ where: { id: userID } });
  }

  findbyName(name: string) {
    return this.userRepository.findOne({ where: { name } });
  }

  delete(userID: number) {
    return this.userRepository.delete(userID);
  }
}
