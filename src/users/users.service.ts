import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Amen' },
    { id: 2, name: 'taher' },
  ];
  private id = 2;

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }
  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }
  createUser(createUserDto: CreateUserDto): User {
    this.id++;
    const newUser = { id: this.id, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
