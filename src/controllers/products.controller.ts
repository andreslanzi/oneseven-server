import { Controller, Get } from '@nestjs/common';
import { Category, Meal } from 'src/types';
import axios from 'axios';
import { getRandomPrice } from 'src/utils';

@Controller('products')
export class ProductsController {
  @Get()
  async getProducts(): Promise<Meal[]> {
    const allProducts: Meal[] = [];
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
    );
    const categoriesNames: string[] = response.data.categories.reduce(
      (acc: string[], curr: Category) => [...acc, curr.strCategory],
      [],
    );
    const urls: { url: string; category: string }[] = categoriesNames.map(
      (categoryName) => ({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        category: categoryName,
      }),
    );
    await Promise.all(
      urls.map(({ url, category }) =>
        axios.get(url).then((res) =>
          res.data.meals.forEach((m: Meal) => {
            m = { ...m, category, price: getRandomPrice(category) };
            allProducts.push(m);
          }),
        ),
      ),
    );
    return allProducts;
  }
}
