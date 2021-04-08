import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name is too short (min 3 chars)' })
  @IsString()
  name: string;
}
