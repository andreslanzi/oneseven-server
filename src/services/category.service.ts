import { Injectable } from '@nestjs/common';
import { GetCategoryDto } from 'src/dtos/getCategoryDto';
import axios from 'axios';

@Injectable()
export class CategoryService {
  async getCategory(getCategoryDto: GetCategoryDto) {
    const { category } = getCategoryDto;
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      );
      const meals = response.data.meals;
      return meals;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
