import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SecteursService } from './secteurs.service';
import { CreateSecteurDto } from './dto/create-secteur.dto';
import { UpdateSecteurDto } from './dto/update-secteur.dto';

@Controller('secteurs')
export class SecteursController {
  constructor(private readonly secteursService: SecteursService) {}

  @Post()
  create(@Body() createSecteurDto: CreateSecteurDto) {
    return this.secteursService.create(createSecteurDto);
  }

  @Get()
  findAll() {
    return this.secteursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.secteursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSecteurDto: UpdateSecteurDto) {
    return this.secteursService.update(+id, updateSecteurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.secteursService.remove(+id);
  }
}
