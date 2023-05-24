import { Module } from '@nestjs/common';
import { SecteursService } from './secteurs.service';
import { SecteursController } from './secteurs.controller';
import { Secteur } from './entities/secteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Secteur])],
  controllers: [SecteursController],
  providers: [SecteursService]
})
export class SecteursModule { }
