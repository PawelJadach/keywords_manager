import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;

    return await category.save();
  }

  async findAll() {
    return await Category.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async changeName(id: number, updateCategoryDto: UpdateCategoryDto) {
    const found = await Category.findOneOrFail(id);

    found.name = updateCategoryDto.name;

    return await found.save();
  }

  async remove(id: number) {
    const found = await Category.findOneOrFail(id);

    await found.remove();

    return { success: true };
  }
}
