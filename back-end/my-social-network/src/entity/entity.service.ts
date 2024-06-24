import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './user-profile.entity';
import { Repository } from 'typeorm';
import { Posts } from './posts-entity.entity';
import { Amigos } from './amigos-entity.entity';

@Injectable()
export class EntityService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    @InjectRepository(Amigos)
    private amigosRepository: Repository<Amigos>,
  ) {}

  createUser(entity: UserProfile): Promise<UserProfile> {
    return this.userProfileRepository.save(entity);
  }

  createPost(entity: Posts): Promise<Posts> {
    return this.postsRepository.save(entity);
  }
  createFriendship(entity: Amigos): Promise<Amigos> {
    return this.amigosRepository.save(entity);
  }

  findAllUsers(): Promise<UserProfile[]> {
    return this.userProfileRepository.find();
  }

  findAllPosts(): Promise<Posts[]> {
    return this.postsRepository.find({ relations: ['autor'] });
  }

  findAllFriends(): Promise<Amigos[]> {
    return this.amigosRepository.find();
  }
}
