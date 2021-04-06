import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async changeName(id: number, updateCategoryDto: UpdateCategoryDto) {
    const found = await Category.findOne(id);

    if(!found) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    found.name = updateCategoryDto.name;

    return await found.save();
  }

  async remove(id: number) {
    const found = await Category.findOne(id);

    if(!found) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await found.remove();
  }
}
