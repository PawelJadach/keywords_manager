import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
export class CreateKeywordDto {
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name is too short (min 3 chars)' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Category is required' })
  @IsNumber()
  category: number;
}
