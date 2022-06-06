import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    protected readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(body) {
    return this.userRepository.save(body);
  }

  async findOne(options) {
    return this.userRepository.findOne(options);
  }
}
