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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFoodDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateFoodDto {
}
exports.CreateFoodDto = CreateFoodDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, title: 'foodname' }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "foodname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, title: 'Ovqatni puli' }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, title: 'foodname' }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, title: "weight food " }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "weightfood", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, title: "Img food", description: "Rasmlarni google docs dan olamiz." }),
    __metadata("design:type", String)
], CreateFoodDto.prototype, "photo", void 0);
//# sourceMappingURL=create-food.dto.js.map