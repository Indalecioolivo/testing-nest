import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { usersDinDin } from './database/dataBaseUsers';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    usersDinDin.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return usersDinDin;
  }

  findOne(name: string) {
    const user = usersDinDin.filter((user) => {
      return user.nome === name;
    });
    return user;
  }

  update(name: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${name} user`;
  }
  '';

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
