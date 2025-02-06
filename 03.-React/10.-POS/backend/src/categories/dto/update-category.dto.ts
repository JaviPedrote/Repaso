
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
     @IsNotEmpty({ message: 'El nombre de la categoría no puede ir vacío' })
        @IsString({ message: 'El nombre debe ser una cadena de texto' })
        @Length(3, 50, { message: 'El nombre debe tener entre 3 y 50 caracteres' })
        name: string;
}
