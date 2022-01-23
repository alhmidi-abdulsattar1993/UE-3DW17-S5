import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createuser')
  createUser(
      @Body('name') name: string,
      @Body('lastname') lastname: string,
      @Body('email') email:string,
      @Body('password') password: string,) {

        const result =this.usersService.createUser(
            name,
            lastname,
            email,
            password,
        )
    return result;
  }

  @Get('users')
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get('user/:id')
  getUser(@Param('id') userid: string) {
      return this.usersService.getOneUser(userid);
  }


  @Put('updateuser')
  async update(@Param('id') userId:string, @Body('firstname') firstname: string, @Body('lastname') lastname: string, @Body('email') email:string, @Body('password') password:string) {
    await this.usersService.update(userId, firstname, lastname, email, password);
    return null;
  }

  @Delete(':id')
  async remove(@Param('id') userId: string) {
    await this.usersService.remove(userId);
    return null;
  }
}
