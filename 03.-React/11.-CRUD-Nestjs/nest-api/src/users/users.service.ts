import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find({ relations: ['profile', 'posts'] });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id }, relations: ['profile', 'posts'] });
  }

  create(user: Partial<User>) {
    return this.usersRepository.save(user);
  }

  async update(id: number, userData: Partial<User>) {
    await this.usersRepository.update(id, userData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
    return { deleted: true };
  }
}
