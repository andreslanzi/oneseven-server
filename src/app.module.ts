import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { PaymentSheetController } from './controllers/payment-sheet.controller';
import { ProductsController } from './controllers/products.controller';
import { PaymentSheetService } from './services/paymentSheet.service';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    CategoriesController,
    PaymentSheetController,
    ProductsController,
    CategoryController,
  ],
  providers: [AppService, PaymentSheetService, CategoryService],
})
export class AppModule {}
