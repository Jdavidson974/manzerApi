import { Module, OnModuleInit } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { Utilisateur } from './entities/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repa } from 'src/repas/entities/repa.entity';
import { Secteur } from 'src/secteurs/entities/secteur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur, Repa, Secteur])],
  controllers: [UtilisateursController],
  providers: [UtilisateursService]
})
export class UtilisateursModule implements OnModuleInit {
  constructor(private readonly userService: UtilisateursService) { }
  onModuleInit() {
    // this.userService.initUser();
  }
}
