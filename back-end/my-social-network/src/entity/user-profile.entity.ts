import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Relation,
  ManyToMany,
} from 'typeorm';
import { Posts } from './posts-entity.entity';
import { Amigos } from './amigos-entity.entity';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @OneToMany(() => Posts, (postagem) => postagem.autor, {
    cascade: true,
  })
  postagens?: Posts[];

  @ManyToMany(() => Amigos, (amigo) => amigo.id, {
    cascade: true,
  })
  amigos?: Relation<Amigos[]>;
}
