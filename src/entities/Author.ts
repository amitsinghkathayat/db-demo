import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Relation } from 'typeorm';

import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column()
  authorName: string;

  @Column({ default: 'unknown' })
  countryOfOrigin: string;

  @ManyToMany(() => Book, (book) => book.authors)
  @JoinTable()
  book: Relation<Book>;
}
