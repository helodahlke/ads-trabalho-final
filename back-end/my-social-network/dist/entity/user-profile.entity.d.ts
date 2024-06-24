import { Relation } from 'typeorm';
import { Posts } from './posts-entity.entity';
import { Amigos } from './amigos-entity.entity';
export declare class UserProfile {
    id: number;
    nome: string;
    email: string;
    postagens?: Posts[];
    amigos?: Relation<Amigos[]>;
}
