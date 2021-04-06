import { Keyword } from './entities/keyword.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';

@Injectable()
export class KeywordsService {
  async create(createKeywordDto: CreateKeywordDto) {
    const keyword = new Keyword();
    keyword.name = createKeywordDto.name;

    return await keyword.save();
  }

  async findAll() {
    return await Keyword.find();
  }

  async changeName(id: number, updateKeywordDto: UpdateKeywordDto) {
    const found = await Keyword.findOne(id);

    if(!found) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    found.name = updateKeywordDto.name;

    return await found.save();
  }

  async remove(id: number) {
    const found = await Keyword.findOne(id);

    if(!found) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await found.remove();
  }
}
