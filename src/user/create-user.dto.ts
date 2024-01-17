import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: 'string';
  @IsNumber()
  mobile: 'number';
}
