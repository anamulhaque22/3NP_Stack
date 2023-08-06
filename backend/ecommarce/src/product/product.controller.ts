import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDTO } from './product.dot';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/add')
  @UsePipes(new ValidationPipe())
  addProduct(@Body() data: ProductDTO): ProductDTO {
    return this.productService.addProduct(data);
  }

  @Get('/all')
  getAllProducts(): ProductDTO[] {
    return this.productService.getAllProducts();
  }

  @Get('getproductbyid/:id')
  getProductById(@Param() data: { id: string }): ProductDTO {
    return this.productService.getProductById(data.id);
  }

  @Post('/update/:id')
  @UsePipes(new ValidationPipe())
  updateProductById(
    @Body() data: ProductDTO,
    @Param() param: { id: string },
  ): ProductDTO {
    console.log(param.id);
    return this.productService.updateProductById(param.id, data);
  }

  @Get('/delete/:id')
  deleteProductById(@Param() param: { id: string }): { message: string } {
    return this.productService.deleteProductById(param.id);
  }
}
