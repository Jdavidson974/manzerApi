import { Module } from '@nestjs/common';
import { RepasService } from './repas.service';
import { RepasController } from './repas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repa } from './entities/repa.entity';
import { Utilisateur } from 'src/utilisateurs/entities/utilisateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repa, Utilisateur])],
  controllers: [RepasController],
  providers: [RepasService]
})
export class RepasModule { }
