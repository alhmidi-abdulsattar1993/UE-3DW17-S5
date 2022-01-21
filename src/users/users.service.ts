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
/*
  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    await this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }*/

}
