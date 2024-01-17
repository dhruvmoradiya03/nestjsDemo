import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { updateUserDto } from './update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.deliver(createUserDto);
  }

  @Patch('/:userID')
  updateUser(
    @Body() updateUserDto: updateUserDto,
    @Param('userID', ParseIntPipe) userID: number,
  ) {
    return this.userService.update(updateUserDto, userID);
  }

  @Get('/:userID')
  Retrive(@Param('userID', ParseIntPipe) userID: number) {
    return this.userService.show(userID);
  }

  @Delete('/:userID')
  deleteUser(@Param('userID', ParseIntPipe) userID: number) {
    return this.userService.delete(userID);
  }
}
