import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResetEntity } from './reset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResetService {
  constructor(
    @InjectRepository(ResetEntity)
    private readonly resetRepository: Repository<ResetEntity>,
  ) {}

  async save(body) {
    return this.resetRepository.save(body);
  }

  async findOne(options) {
    return this.resetRepository.findOne(options);
  }
}
