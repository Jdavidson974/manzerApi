import { Injectable } from '@nestjs/common';
import { CreateRepaDto } from './dto/create-repa.dto';
import { UpdateRepaDto } from './dto/update-repa.dto';

@Injectable()
export class RepasService {
  create(createRepaDto: CreateRepaDto) {
    return 'This action adds a new repa';
  }

  findAll() {
    return `This action returns all repas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repa`;
  }

  update(id: number, updateRepaDto: UpdateRepaDto) {
    return `This action updates a #${id} repa`;
  }

  remove(id: number) {
    return `This action removes a #${id} repa`;
  }
}
