import { Injectable, HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel : Model<User>){}

  async create(createUserDto: CreateUserDto) {
    const condidate = await this.userModel.findOne({email: createUserDto.email}) 
    if(condidate){
      throw new HttpException("Oldin ro'yxatdan o'tilgan.", 400)
    }
    const newuser = await this.userModel.create(createUserDto);
    return newuser;
  }

  async findAll() {
    const users = await this.userModel.find();
    return users;
  }

  async findbyEmail(email: string){
    const user = await this.userModel.findOne({email: email});
    return user;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
