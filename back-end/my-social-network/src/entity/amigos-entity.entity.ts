import {
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity()
export class Amigos {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => UserProfile, (user) => user.id)
  @JoinColumn({ name: 'amigo' })
  amigo: Relation<UserProfile>;
}
