import { Module } from '@nestjs/common';
import { RepasService } from './repas.service';
import { RepasController } from './repas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repa } from './entities/repa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Repa])],
  controllers: [RepasController],
  providers: [RepasService]
})
export class RepasModule { }
