import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  conteudo: string;

  @ManyToOne(() => UserProfile, (user) => user.postagens)
  @JoinColumn({ name: 'autor' })
  autor: UserProfile;
}
