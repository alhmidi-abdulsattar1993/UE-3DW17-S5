import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersRepository } from './entities/user.entity';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';

@Module({
  imports: [
   // TypeOrmModule.forFeature([Users]),
    MongooseModule.forFeature([{name:'User', schema: userSchema}])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository
  ]
})
export class UsersModule {}