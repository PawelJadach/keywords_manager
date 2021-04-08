import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Keyword } from 'src/keywords/entities/keyword.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;

    const { id } = await category.save()

    return await Category.findOne(id, { relations: ['keywords']});
  }

  async findAll() {
    return await Category.find({ relations: ['keywords']});
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
    const found = await Category.findOne(id, { relations: ['keywords'] });

    if(!found) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    found.keywords.forEach(async keyword => {
      await Keyword.delete(keyword.id);
    });

    await found.remove();
  }
}
