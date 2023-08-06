import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsInt()
  quantity: number;
  @IsNotEmpty()
  description: string;
}
