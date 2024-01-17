import { IsNotEmpty, IsNumber } from 'class-validator';

export class updateUserDto {
  @IsNotEmpty()
  name: 'string';

  @IsNumber()
  mobile: 'number';
}
