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
exports.RasmlarController = void 0;
const common_1 = require("@nestjs/common");
const rasmlar_service_1 = require("./rasmlar.service");
const create_rasmlar_dto_1 = require("./dto/create-rasmlar.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
let RasmlarController = exports.RasmlarController = class RasmlarController {
    constructor(rasmlarService) {
        this.rasmlarService = rasmlarService;
    }
    create(createRasmlarDto, file) {
        return this.rasmlarService.create(createRasmlarDto, file);
    }
    findAll() {
        return this.rasmlarService.findAll();
    }
    findOne(id) {
        return this.rasmlarService.findOne(id);
    }
    remove(id) {
        return this.rasmlarService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const filename = Date.now() + "." + file.originalname.split('.')[1];
                callback(null, filename);
            }
        })
    })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ description: 'Rasm yuklash.', type: create_rasmlar_dto_1.CreateRasmlarDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rasmlar_dto_1.CreateRasmlarDto, Object]),
    __metadata("design:returntype", void 0)
], RasmlarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RasmlarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RasmlarController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RasmlarController.prototype, "remove", null);
exports.RasmlarController = RasmlarController = __decorate([
    (0, swagger_1.ApiTags)("Rasmlar"),
    (0, common_1.Controller)('rasmlar'),
    __metadata("design:paramtypes", [rasmlar_service_1.RasmlarService])
], RasmlarController);
//# sourceMappingURL=rasmlar.controller.js.map