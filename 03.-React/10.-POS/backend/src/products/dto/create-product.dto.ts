import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre es oligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'El precio es oligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 2, allowNaN: false },
    { message: 'El precio debe ser un número con 2 decimales' },
  )
  price: number;

  @IsNotEmpty({ message: 'El precio es oligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 0, allowNaN: false },
    { message: 'Cantidad no válida' },
  )
  inventory: number;

    @IsNotEmpty({ message: 'La categoría no puede ir vacía' })
    @IsInt({ message: 'La categoría no es válida' })
  categoryId: number;
}
