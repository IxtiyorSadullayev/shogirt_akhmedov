import {HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import {InjectModel} from '@nestjs/mongoose'
import { Food } from './scemas/food.scema';
import { Model } from 'mongoose';
@Injectable()
export class FoodService {
  constructor (@InjectModel(Food.name) private foodModel: Model<Food>){}
  async create(createFoodDto: CreateFoodDto) {
    // console.log(createFoodDto)
    const condidate = await this.foodModel.findOne({foodname: createFoodDto.foodname})
    if(condidate){
      throw new HttpException("Kechirasiz. Ushbu taom allaqachon yaratilgan", HttpStatus.BAD_REQUEST)
    }
    const newfood = await this.foodModel.create(createFoodDto);
    
    return newfood;
  }

   async findAll() {

    const foods =  await this.foodModel.find()

    return foods;
  }

  async findOne(id: string) {
    const food = await this.foodModel.findById(id);
    return food;
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    const newfood = await this.foodModel.findByIdAndUpdate(id, updateFoodDto)
    return newfood;
  }

  async remove(id: string) {
    const deletedfood = await this.foodModel.findByIdAndRemove(id)
    return `This action removes a #${id} food  food ${deletedfood} ` ;
  }
}
