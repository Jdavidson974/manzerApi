import { Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { Repa } from 'src/repas/entities/repa.entity';
import { Secteur } from 'src/secteurs/entities/secteur.entity';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur) private userRepo: Repository<Utilisateur>,
    @InjectRepository(Repa) private repasRepo: Repository<Repa>,
    @InjectRepository(Secteur) private SecteurRepo: Repository<Secteur>,
  ) { }

  initUser() {
    this.userRepo.find({ relations: { secteur: true } }).then(users => {
      const tabInitUser = [
        { email: 'test1', username: 'toto974' },
        { email: 'test2', username: 'GouteAnous' },
        { email: 'test2', username: 'ManzAli' }
      ]
      if (!users.length) {
        const usersTab: Utilisateur[] = [];
        tabInitUser.forEach((value) => {
          usersTab.push(this.userRepo.create({
            email: value.email, username: value.username,
          }));

        })
        return this.userRepo.save(usersTab);
      }

      if (users.length < 3) {
        users.forEach(user => {
          this.userRepo.remove(user);
        });
        const usersTab: Utilisateur[] = [];
        tabInitUser.forEach((value) => {
          usersTab.push(this.userRepo.create({ email: value.email, username: value.username, }));
        })
        return this.userRepo.save(usersTab);
      }
    })

  }
  create(createUtilisateurDto: CreateUtilisateurDto) {
    return 'This action adds a new utilisateur';
  }

  findAll() {
    return `This action returns all utilisateurs`;
  }

  findOneByEmail(email: string) {
    return this.userRepo.findOne({ where: { email: email } });
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
