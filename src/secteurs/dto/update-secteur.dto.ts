import { PartialType } from '@nestjs/mapped-types';
import { CreateSecteurDto } from './create-secteur.dto';

export class UpdateSecteurDto extends PartialType(CreateSecteurDto) {}
