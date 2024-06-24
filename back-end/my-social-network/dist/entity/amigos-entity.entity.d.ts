import { Relation } from 'typeorm';
import { UserProfile } from './user-profile.entity';
export declare class Amigos {
    id: number;
    amigo: Relation<UserProfile>;
}
