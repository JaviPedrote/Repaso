import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IdValidationPipe } from '../common/pipes/id-validation/id-validation.pipe';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  crearCategorias(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.crear(createCategoryDto);
  }

  @Get()
  categorias() {
    return this.categoriesService.buscarTodas();
  }

  @Post(':id')
  buscarId(@Param('id',IdValidationPipe) id: string) {
    return this.categoriesService.buscarUna(+id);
  }

  @Patch(':id')
  actualizar(
    @Param('id',IdValidationPipe) id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.actualizar(+id, updateCategoryDto);
  }

  @Delete(':id')
  borrar(@Param('id',IdValidationPipe) id: string) {
    return this.categoriesService.eliminar(+id);
  }
}
