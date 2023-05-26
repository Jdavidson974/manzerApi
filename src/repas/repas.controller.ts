import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UploadedFile, UseInterceptors, FileTypeValidator, ParseFilePipe } from '@nestjs/common';
import { RepasService } from './repas.service';
import { CreateRepaDto } from './dto/create-repa.dto';
import { UpdateRepaDto } from './dto/update-repa.dto';
import { Public } from 'src/shared/decorators/public.decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('repas')
export class RepasController {
  constructor(private readonly repasService: RepasService) { }

  @Get()
  @Public()
  findAll() {
    return this.repasService.findAll();
  }
  @Get("my-repas")
  getMyRepas(@Req() req) {
    const id = req.user.userId;
    return this.repasService.findAllMyRepas(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repasService.findOne(+id);
  }




  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    const idUser = req.user.userId
    return this.repasService.remove(+id, +idUser);
  }

  @Post("update")
  update(@Body() updateRepaDto: UpdateRepaDto, @Req() req) {
    const id = req.user.userId
    return this.repasService.update(+id, updateRepaDto);
  }
  @Post()
  create(@Body() createRepaDto: CreateRepaDto, @Req() req) {
    const id = req.user.userId
    return this.repasService.create(createRepaDto, +id);
  }
}
