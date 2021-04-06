import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 35000,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: ["dist/**/**.entity{.ts,.js}"],
      synchronize: true,
    }),
    CategoriesModule,
    KeywordsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
