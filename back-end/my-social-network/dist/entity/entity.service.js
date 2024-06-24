"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_profile_entity_1 = require("./user-profile.entity");
const typeorm_2 = require("typeorm");
const posts_entity_entity_1 = require("./posts-entity.entity");
const amigos_entity_entity_1 = require("./amigos-entity.entity");
let EntityService = class EntityService {
    constructor(userProfileRepository, postsRepository, amigosRepository) {
        this.userProfileRepository = userProfileRepository;
        this.postsRepository = postsRepository;
        this.amigosRepository = amigosRepository;
    }
    createUser(entity) {
        return this.userProfileRepository.save(entity);
    }
    createPost(entity) {
        return this.postsRepository.save(entity);
    }
    createFriendship(entity) {
        return this.amigosRepository.save(entity);
    }
    findAllUsers() {
        return this.userProfileRepository.find();
    }
    findAllPosts() {
        return this.postsRepository.find({ relations: ['autor'] });
    }
    findAllFriends() {
        return this.amigosRepository.find();
    }
};
exports.EntityService = EntityService;
exports.EntityService = EntityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_profile_entity_1.UserProfile)),
    __param(1, (0, typeorm_1.InjectRepository)(posts_entity_entity_1.Posts)),
    __param(2, (0, typeorm_1.InjectRepository)(amigos_entity_entity_1.Amigos)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], EntityService);
//# sourceMappingURL=entity.service.js.map