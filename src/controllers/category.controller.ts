import { Controller, Get, Body } from '@nestjs/common';
import { GetCategoryDto } from 'src/dtos/getCategoryDto';
import { CategoryService } from 'src/services/category.service';
import { Meal } from 'src/types';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async getCategory(@Body() getCategoryDto: GetCategoryDto): Promise<Meal[]> {
    return this.categoryService.getCategory(getCategoryDto);
  }
}
