import { IsNumberString, IsOptional } from 'class-validator';

export class GetProductsQueryDto {

  @IsOptional()
  @IsNumberString({}, { message: 'El id de la categoria debe ser un numero' })
  category_id: number;

  @IsOptional()
  @IsNumberString({}, { message: 'El take debe ser un número' })
  take:number;

  @IsOptional()
  @IsNumberString({}, { message: 'El skip debe ser un número' })
  skip:number;




}