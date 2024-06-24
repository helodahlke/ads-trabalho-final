import { UserProfile } from './user-profile.entity';
import { Repository } from 'typeorm';
import { Posts } from './posts-entity.entity';
import { Amigos } from './amigos-entity.entity';
export declare class EntityService {
    private userProfileRepository;
    private postsRepository;
    private amigosRepository;
    constructor(userProfileRepository: Repository<UserProfile>, postsRepository: Repository<Posts>, amigosRepository: Repository<Amigos>);
    createUser(entity: UserProfile): Promise<UserProfile>;
    createPost(entity: Posts): Promise<Posts>;
    createFriendship(entity: Amigos): Promise<Amigos>;
    findAllUsers(): Promise<UserProfile[]>;
    findAllPosts(): Promise<Posts[]>;
    findAllFriends(): Promise<Amigos[]>;
}
