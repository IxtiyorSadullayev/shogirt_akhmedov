import { Module } from '@nestjs/common';
import { RasmlarService } from './rasmlar.service';
import { RasmlarController } from './rasmlar.controller';
import { MulterModule } from '@nestjs/platform-express/multer';
import {MongooseModule} from '@nestjs/mongoose'
import { Rasm, RasmSchema } from './schemas/rasm.schema';

@Module({
  imports: [MulterModule.register({dest: '/upload'}), MongooseModule.forFeature([{name: Rasm.name, schema: RasmSchema}])],
  controllers: [RasmlarController],
  providers: [RasmlarService]
})
export class RasmlarModule {}
