import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsQueryDto } from './dto/get-product.dto';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  crear(@Body() createProductDto: CreateProductDto) {
    return this.productsService.crear(createProductDto);
  }

  @Get()
  findAll(@Query() query: GetProductsQueryDto) {
    const category = query.category_id
      ? Number(query.category_id) || null
      : null;
    const take = query.take ? query.take : 10;
    const skip = query.skip ? query.skip : 0;
    return this.productsService.mostrarTodos(category, take, skip);
  }

  @Get(':id')
  findOne(@Param('id', ValidationPipe) id: string) {
    return this.productsService.buscarUno(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ValidationPipe) id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ValidationPipe) id: string) {
    return this.productsService.remove(+id);
  }
}
