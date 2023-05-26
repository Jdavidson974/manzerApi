import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRepaDto } from './dto/create-repa.dto';
import { UpdateRepaDto } from './dto/update-repa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repa } from './entities/repa.entity';
import { Repository } from 'typeorm';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';

@Injectable()
export class RepasService {

  constructor(
    @InjectRepository(Repa) private repasRepo: Repository<Repa>,
    @InjectRepository(Utilisateur) private userRepo: Repository<Utilisateur>
  ) { }
  create(createRepaDto: CreateRepaDto, userId: number) {
    return this.userRepo.findOneBy({ id: userId }).then(
      user => {
        if (user) {
          const newRepas = this.repasRepo.create({ ...createRepaDto, user: user })
          return this.repasRepo.save(newRepas);
        } else {
          throw new HttpException('user introuvable', HttpStatus.FORBIDDEN)
        }
      }
    );
  }

  findAll() {
    return this.repasRepo.find({ relations: { user: { secteur: true } } });
  }

  findOne(id: number) {
    return `This action returns a #${id} repa`;
  }

  update(id: number, updateRepaDto: UpdateRepaDto) {
    return this.userRepo.findOneBy({ id: id }).then(
      user => {
        if (user) {
          return this.repasRepo.findOneBy({ id: updateRepaDto.idRepas }).then(
            repas => {
              if (repas) {
                return this.repasRepo.save({ ...repas, name: updateRepaDto.name, tag: updateRepaDto.tag });
              } else {
                throw new HttpException('repas introuvable', HttpStatus.BAD_REQUEST)
              }
            }
          )
        } else {
          throw new HttpException('user introuvable', HttpStatus.FORBIDDEN)
        }
      }
    );
  }

  remove(id: number, idUser: number) {
    return this.userRepo.findOneBy({ id: idUser }).then(
      user => {
        if (user) {
          return this.repasRepo.findOneBy({ id: id }).then(
            repas => {
              if (repas) {
                return this.repasRepo.remove(repas);
              } else {
                throw new HttpException('repas introuvable', HttpStatus.BAD_REQUEST)
              }
            }
          )
        } else {
          throw new HttpException('user introuvable', HttpStatus.FORBIDDEN)
        }
      }
    );
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
