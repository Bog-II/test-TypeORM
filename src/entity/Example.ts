import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'test4' })
export class Example {
  @PrimaryGeneratedColumn('uuid')
  pk: number;

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  exampleField1: string;
}
