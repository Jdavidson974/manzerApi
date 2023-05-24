import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepasService } from './repas.service';
import { CreateRepaDto } from './dto/create-repa.dto';
import { UpdateRepaDto } from './dto/update-repa.dto';

@Controller('repas')
export class RepasController {
  constructor(private readonly repasService: RepasService) {}

  @Post()
  create(@Body() createRepaDto: CreateRepaDto) {
    return this.repasService.create(createRepaDto);
  }

  @Get()
  findAll() {
    return this.repasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepaDto: UpdateRepaDto) {
    return this.repasService.update(+id, updateRepaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repasService.remove(+id);
  }
}
