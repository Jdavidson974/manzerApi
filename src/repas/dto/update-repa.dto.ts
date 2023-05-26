import { PartialType } from '@nestjs/mapped-types';
import { CreateRepaDto } from './create-repa.dto';

export class UpdateRepaDto extends PartialType(CreateRepaDto) {
    name: string;
    tag: string;
    idRepas: number
}
