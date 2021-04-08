import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { KeywordsModule } from "src/keywords/keywords.module";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [KeywordsModule]
})
export class CategoriesModule {}
