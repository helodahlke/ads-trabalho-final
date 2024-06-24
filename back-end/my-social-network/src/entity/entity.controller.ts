import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller('entity')
export class EntityController {
  constructor(public entityService: EntityService) {}
  @Get('/users')
  @HttpCode(200)
  public findUser() {
    return this.entityService.findAllUsers();
  }
  @Get('/posts')
  @HttpCode(200)
  public findPosts() {
    return this.entityService.findAllPosts();
  }

  @Post('/posts')
  @HttpCode(200)
  public createPost(@Body() newPost) {
    return this.entityService.createPost({
      id: newPost.id,
      conteudo: newPost.conteudo,
      autor: newPost.autor,
    });
  }
}
