import { KeywordInterface } from 'src/interfaces/keyword';

export interface CategoryInterface {
  id: number;
  name: string;
  keywords: KeywordInterface[]
}