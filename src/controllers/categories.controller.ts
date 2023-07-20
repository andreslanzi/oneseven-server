import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { Category } from 'src/types';

@Controller('categories')
export class CategoriesController {
  @Get()
  async getCategories(): Promise<Category[]> {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      );
      const categories = response.data.categories;
      return categories;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
