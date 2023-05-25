import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SecteursService } from './secteurs.service';
import { CreateSecteurDto } from './dto/create-secteur.dto';
import { UpdateSecteurDto } from './dto/update-secteur.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { Public } from 'src/shared/decorators/public.decorators';

@Controller('secteurs')
export class SecteursController {
  constructor(private readonly secteursService: SecteursService) { }

  @Post()
  create(@Body() createSecteurDto: CreateSecteurDto) {
    return this.secteursService.create(createSecteurDto);
  }

  @Get()
  @Public()
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
