import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CategoryInterface } from "src/interfaces/categories";
import { Keyword } from "src/keywords/entities/keyword.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./entities/category.entity";
import * as axios from "axios";
import { KeywordsService } from "src/keywords/keywords.service";

@Injectable()
export class CategoriesService {
  constructor(private readonly keywordsService: KeywordsService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryInterface> {
    const category = new Category();
    category.name = createCategoryDto.name;

    const { id } = await category.save()

    const semanticallySimilarWords = await axios.default.get(`https://api.datamuse.com/sug?s=${createCategoryDto.name}`)

    if(semanticallySimilarWords.data) {
      for (const keyword of semanticallySimilarWords.data) {
        await this.keywordsService.create({ name: keyword.word, category: id });
      }
    }
    return await Category.findOne(id, { relations: ["keywords"]});
  }

  async findAll(): Promise<CategoryInterface[]> {
    return await Category.find({ relations: ["keywords"]});
  }

  async remove(id: number): Promise<void> {
    const found = await Category.findOne(id, { relations: ["keywords"] });

    if(!found) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    found.keywords.forEach(async keyword => {
      await Keyword.delete(keyword.id);
    });

    await found.remove();
  }
}
