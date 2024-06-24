import { EntityService } from './entity.service';
export declare class EntityController {
    entityService: EntityService;
    constructor(entityService: EntityService);
    findUser(): Promise<import("./user-profile.entity").UserProfile[]>;
    findPosts(): Promise<import("./posts-entity.entity").Posts[]>;
    createPost(newPost: any): Promise<import("./posts-entity.entity").Posts>;
}
