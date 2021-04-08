import { Category } from "./../categories/entities/category.entity";
import { Keyword } from "./entities/keyword.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateKeywordDto } from "./dto/create-keyword.dto";
import { UpdateKeywordDto } from "./dto/update-keyword.dto";

@Injectable()
export class KeywordsService {
  async create(createKeywordDto: CreateKeywordDto) {
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

  async findAll() {
    return await Keyword.find({ relations: ["category"]});
  }

  async changeName(id: number, updateKeywordDto: UpdateKeywordDto) {
    const found = await Keyword.findOne(id);

    if(!found) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    found.name = updateKeywordDto.name;

    return await found.save();
  }

  async remove(id: number) {
    const found = await Keyword.findOne(id);

    if(!found) {
      throw new HttpException("Not found", HttpStatus.NOT_FOUND);
    }

    await found.remove();
  }
}
