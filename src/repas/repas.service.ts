import { Injectable } from '@nestjs/common';
import { CreateRepaDto } from './dto/create-repa.dto';
import { UpdateRepaDto } from './dto/update-repa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repa } from './entities/repa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepasService {

  constructor(@InjectRepository(Repa) private repasRepo: Repository<Repa>) { }
  create(createRepaDto: CreateRepaDto) {
    return 'This action adds a new repa';
  }

  findAll() {
    return this.repasRepo.find({ relations: { user: { secteur: true } } });
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

  findAllMyRepas(id: number) {
    return this.repasRepo.find(
      {
        where: {
          user: {
            id: id
          }
        },
        relations: {
          user: true
        }
      })
  }
}
