import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { CategoryInterface } from "src/interfaces/categories";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<CategoryInterface> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll(): Promise<CategoryInterface[]> {
    return this.categoriesService.findAll();
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.categoriesService.remove(+id);
  }
}
