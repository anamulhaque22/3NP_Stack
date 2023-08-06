import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dot';

@Injectable()
export class ProductService {
  addProduct(data: ProductDTO): ProductDTO {
    return data;
  }

  getAllProducts(): ProductDTO[] {
    return [
      {
        name: 'Asus Laptop',
        price: 2222,
        quantity: 13,
        description: 'fsdfsdf',
      },
    ];
  }

  getProductById(id: string): ProductDTO {
    return {
      name: 'Asus Laptop',
      price: 2222,
      quantity: 13,
      description: 'fsdfsdf',
    };
  }

  updateProductById(id: string, data: ProductDTO): ProductDTO {
    return data;
  }

  deleteProductById(id: string): { message: string } {
    return { message: `Product with id ${id} deleted` };
  }
}
