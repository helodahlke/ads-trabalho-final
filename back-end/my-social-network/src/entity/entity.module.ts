import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { Posts } from './posts-entity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './user-profile.entity';
import { Amigos } from './amigos-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfile, Posts, Amigos])],
  providers: [EntityService],
  controllers: [EntityController],
})
export class EntityModule {}
