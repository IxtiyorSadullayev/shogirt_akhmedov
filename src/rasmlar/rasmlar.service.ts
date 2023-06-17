import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from "@nestjs/mongoose"
import { CreateRasmlarDto } from './dto/create-rasmlar.dto';
import { Rasm } from './schemas/rasm.schema';

@Injectable()
export class RasmlarService {

  constructor(@InjectModel(Rasm.name) private rasmModel: Model<Rasm>){}

  async create(createRasmlarDto: CreateRasmlarDto, file) {
    const newrasm = await this.rasmModel.create({file: file.path, filename: createRasmlarDto.filename})
    return newrasm;
  }

  async findAll() {
    const rasmlar = await this.rasmModel.find()
    return rasmlar;
  }

  async findOne(id: string) {
    const rasm = await this.rasmModel.findById(id)
    return rasm;
  }

  async remove(id: string) {
    const rasmu = await this.rasmModel.findByIdAndDelete(id)
    return rasmu;
  }
}
