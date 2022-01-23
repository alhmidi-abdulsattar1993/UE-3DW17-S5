import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
    private users: Users[];
  constructor(
    @InjectModel('User') 
    private readonly userModel : Model<User>
) { }

    
 async createUser(name:string, lastname:string, email:string, password:string ) {
    const newUser = new this.userModel({
        name,
        lastname,
        email,
        password,
    });
    const result = await newUser.save();
    console.log(result);
    return 'logseds';
  }

  async findAll() {
    const result = await this.userModel.find().exec();
    return result.map(user =>({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    }))
  }

  async getOneUser(userId: string) {
    const result = await this.findUser(userId);
    return result;
  }
  private async findUser(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async update(userId: string, firstname:string, lastname:string, email:string, password:string) {
    const updatedUser = await this.findUser(userId);
    if (firstname){
      updatedUser.firstname = firstname;
    }
    if (lastname){
      updatedUser.lastname = lastname;
    }
    if (email){
      updatedUser.email = email;
    }
    if (password){
      updatedUser.password = password;
    }
    updatedUser.save();
  }

  async remove(userId: string) {
    await this.userModel.deleteOne({id: userId});
  }
}
