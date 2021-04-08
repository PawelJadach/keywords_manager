import { Keyword } from "./../../keywords/entities/keyword.entity";
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from "typeorm";

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Keyword, keyword => keyword.category)
  keywords: Keyword[];
}
