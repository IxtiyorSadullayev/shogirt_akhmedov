"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RasmlarModule = void 0;
const common_1 = require("@nestjs/common");
const rasmlar_service_1 = require("./rasmlar.service");
const rasmlar_controller_1 = require("./rasmlar.controller");
const multer_1 = require("@nestjs/platform-express/multer");
const mongoose_1 = require("@nestjs/mongoose");
const rasm_schema_1 = require("./schemas/rasm.schema");
let RasmlarModule = exports.RasmlarModule = class RasmlarModule {
};
exports.RasmlarModule = RasmlarModule = __decorate([
    (0, common_1.Module)({
        imports: [multer_1.MulterModule.register({ dest: '/upload' }), mongoose_1.MongooseModule.forFeature([{ name: rasm_schema_1.Rasm.name, schema: rasm_schema_1.RasmSchema }])],
        controllers: [rasmlar_controller_1.RasmlarController],
        providers: [rasmlar_service_1.RasmlarService]
    })
], RasmlarModule);
//# sourceMappingURL=rasmlar.module.js.map