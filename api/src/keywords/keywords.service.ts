import { Category } from "./../categories/entities/category.entity";
import { Keyword } from "./entities/keyword.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateKeywordDto } from "./dto/create-keyword.dto";
import { KeywordInterface } from "src/interfaces/keyword";

@Injectable()
export class KeywordsService {
  async create(createKeywordDto: CreateKeywordDto): Promise<KeywordInterface> {
    const keyword = new Keyword();
    if(!createKeywordDto.category) {
      throw new HttpException("Provide category", HttpStatus.BAD_REQUEST)
    }

    const found = await Category.findOne(createKeywordDto.category);

    if(!found) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    keyword.name = createKeywordDto.name;
    keyword.category = found;
    const newKeyword = await keyword.save();
    return { id: newKeyword.id, name: newKeyword.name };
  }

  async findAll(): Promise<KeywordInterface[]> {
    return await Keyword.find({ relations: ["category"]});
  }

  async remove(id: number): Promise<void> {
    const found = await Keyword.findOne(id);

    if(!found) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    await found.remove();
  }
}
