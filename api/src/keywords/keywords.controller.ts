import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { KeywordsService } from "./keywords.service";
import { CreateKeywordDto } from "./dto/create-keyword.dto";
import { KeywordInterface } from "src/interfaces/keyword";

@Controller("keywords")
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService) {}

  @Post()
  create(@Body() createKeywordDto: CreateKeywordDto): Promise<KeywordInterface> {
    return this.keywordsService.create(createKeywordDto);
  }

  @Get()
  findAll(): Promise<KeywordInterface[]> {
    return this.keywordsService.findAll();
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.keywordsService.remove(+id);
  }
}
