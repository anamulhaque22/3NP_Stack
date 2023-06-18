import { IsDateString, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AdminDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  number: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  @IsDateString()
  dob: Date;
  @IsString()
  password: string;
  avatar: string;
}
export class AdminLoginDTO {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
