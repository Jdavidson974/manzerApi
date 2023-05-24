import { Injectable } from '@nestjs/common';
import { CreateSecteurDto } from './dto/create-secteur.dto';
import { UpdateSecteurDto } from './dto/update-secteur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Secteur } from './entities/secteur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SecteursService {
  constructor(@InjectRepository(Secteur) private secteurRepo: Repository<Secteur>) { }
  initSecteur() {
    const tabInitSecteur = ['nord', 'sud', 'est', 'ouest']
    this.secteurRepo.find().then(
      secteurs => {

        if (!secteurs.length) {
          const secteursTab: Secteur[] = []
          tabInitSecteur.forEach((value) => {
            secteursTab.push(this.secteurRepo.create({ name: value }));
          })
          return this.secteurRepo.save(secteursTab);
        }

        if (secteurs.length < 4) {
          secteurs.forEach(secteur => {
            this.secteurRepo.delete(secteur);
          });
          const secteursTab: Secteur[] = [];
          tabInitSecteur.forEach(value => {
            secteursTab.push(this.secteurRepo.create({ name: value }));
          })
          return this.secteurRepo.save(secteursTab);
        }
      }
    )
  }
  create(createSecteurDto: CreateSecteurDto) {
    return 'This action adds a new secteur';
  }

  findAll() {
    return `This action returns all secteurs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} secteur`;
  }

  update(id: number, updateSecteurDto: UpdateSecteurDto) {
    return `This action updates a #${id} secteur`;
  }

  remove(id: number) {
    return `This action removes a #${id} secteur`;
  }
}
