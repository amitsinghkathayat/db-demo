import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  Relation,
} from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  yearOfFirstPublication: number;

  @Column({ default: false })
  isPublicDomain: boolean;

  @OneToMany(() => Review, (review) => review.book, { cascade: ['insert', 'update'] })
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (author) => author.book)
  @JoinTable()
  authors: Relation<Author>[];
}
