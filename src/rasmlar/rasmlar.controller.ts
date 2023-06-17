import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { RasmlarService } from './rasmlar.service';
import { CreateRasmlarDto } from './dto/create-rasmlar.dto';
import { UpdateRasmlarDto } from './dto/update-rasmlar.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiHeader, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';

@ApiTags("Rasmlar")
@Controller('rasmlar')
export class RasmlarController {
  constructor(private readonly rasmlarService: RasmlarService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req,file, callback)=>{
        const filename = Date.now() + "."+ file.originalname.split('.')[1]
        callback(null, filename);
      } 
    })
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({description: 'Rasm yuklash.', type: CreateRasmlarDto})
  create(@Body() createRasmlarDto: CreateRasmlarDto, @UploadedFile() file : Express.Multer.File) {
    return this.rasmlarService.create(createRasmlarDto, file);
  }

  @Get()
  findAll() {
    return this.rasmlarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rasmlarService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rasmlarService.remove(id);
  }
}
