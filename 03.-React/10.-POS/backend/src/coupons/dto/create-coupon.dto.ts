import { IsNotEmpty, IsInt, Max, Min, IsDateString } from 'class-validator';

export class CreateCouponDto {

  @IsNotEmpty({ message: 'El nombre del cupon es requerido' })
  name: string;

@IsNotEmpty({ message: 'El porcentaje del cupon es requerido' })
@IsInt({ message: 'El porcentaje debe ser entre 1 y 100' })
@Max(100, { message: 'El descuento máximo es de 100' })
@Min(1, { message: 'El descuentro mínimo es de 1' })
  porcentage: number;

@IsNotEmpty({ message: 'La fecha de expiración es requerida' })
@IsDateString({},{ message: 'La fecha de expiración debe ser una fecha válida' })
  expirationDate: Date;
}
