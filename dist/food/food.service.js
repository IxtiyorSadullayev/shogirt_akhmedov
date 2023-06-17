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
exports.FoodService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const food_scema_1 = require("./scemas/food.scema");
const mongoose_2 = require("mongoose");
let FoodService = exports.FoodService = class FoodService {
    constructor(foodModel) {
        this.foodModel = foodModel;
    }
    async create(createFoodDto) {
        const condidate = await this.foodModel.findOne({ foodname: createFoodDto.foodname });
        if (condidate) {
            throw new common_1.HttpException("Kechirasiz. Ushbu taom allaqachon yaratilgan", common_1.HttpStatus.BAD_REQUEST);
        }
        const newfood = await this.foodModel.create(createFoodDto);
        return newfood;
    }
    async findAll() {
        const foods = await this.foodModel.find();
        return foods;
    }
    async findOne(id) {
        const food = await this.foodModel.findById(id);
        return food;
    }
    async update(id, updateFoodDto) {
        const newfood = await this.foodModel.findByIdAndUpdate(id, updateFoodDto);
        return newfood;
    }
    async remove(id) {
        const deletedfood = await this.foodModel.findByIdAndRemove(id);
        return `This action removes a #${id} food  food ${deletedfood} `;
    }
};
exports.FoodService = FoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(food_scema_1.Food.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FoodService);
//# sourceMappingURL=food.service.js.map