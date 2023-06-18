import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [AdminModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
