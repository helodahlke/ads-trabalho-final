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
exports.EntityController = void 0;
const common_1 = require("@nestjs/common");
const entity_service_1 = require("./entity.service");
let EntityController = class EntityController {
    constructor(entityService) {
        this.entityService = entityService;
    }
    findUser() {
        return this.entityService.findAllUsers();
    }
    findPosts() {
        return this.entityService.findAllPosts();
    }
    createPost(newPost) {
        return this.entityService.createPost({
            id: newPost.id,
            conteudo: newPost.conteudo,
            autor: newPost.autor,
        });
    }
};
exports.EntityController = EntityController;
__decorate([
    (0, common_1.Get)('/users'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)('/posts'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityController.prototype, "findPosts", null);
__decorate([
    (0, common_1.Post)('/posts'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EntityController.prototype, "createPost", null);
exports.EntityController = EntityController = __decorate([
    (0, common_1.Controller)('entity'),
    __metadata("design:paramtypes", [entity_service_1.EntityService])
], EntityController);
//# sourceMappingURL=entity.controller.js.map