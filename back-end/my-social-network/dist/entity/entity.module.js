"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityModule = void 0;
const common_1 = require("@nestjs/common");
const entity_service_1 = require("./entity.service");
const entity_controller_1 = require("./entity.controller");
const posts_entity_entity_1 = require("./posts-entity.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_profile_entity_1 = require("./user-profile.entity");
const amigos_entity_entity_1 = require("./amigos-entity.entity");
let EntityModule = class EntityModule {
};
exports.EntityModule = EntityModule;
exports.EntityModule = EntityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_profile_entity_1.UserProfile, posts_entity_entity_1.Posts, amigos_entity_entity_1.Amigos])],
        providers: [entity_service_1.EntityService],
        controllers: [entity_controller_1.EntityController],
    })
], EntityModule);
//# sourceMappingURL=entity.module.js.map