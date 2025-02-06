import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Category } from '../categories/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async crear(@Body() createProductDto: CreateProductDto) {
    const category = await this.categoryRepository.findOneBy({
      id: createProductDto.categoryId,
    }); // BUSCA LA CATEGORIA POR ID

    if (!category) {
      const errors: string[] = [];
      errors.push('La categoria no existe');
      throw new NotFoundException(errors);
    }

    return this.productRepository.save({
      ...createProductDto,
      category,
    });
  }

  async mostrarTodos(categoryId: number | null, take: number, skip: number) {
    const options: FindManyOptions<Product> = {
      relations: {
        category: true,
      },
      order: {
        id: 'DESC',
      },
      take,
      skip,
    };

    if (categoryId) {
      options.where = {
        category: {
          id: categoryId,
        },
      };
    }

    const [products, total] =
      await this.productRepository.findAndCount(options);
    return { products, total };
  }

  async buscarUno(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: [ "category" ],
    });
    if(!product){
      throw new NotFoundException(`El producto con el id ${id} no fué encontrado`)
    }

    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.buscarUno(id)
    Object.assign(product,updateProductDto)

    if(updateProductDto.categoryId){
      const category = await this.categoryRepository.findOneBy({id:updateProductDto.categoryId})
      if(!category){
        const errors:string[] = [];
        errors.push('La categoria no existe')
        throw new NotFoundException(errors)
      }

      product.category=category
    }
    return await this.productRepository.save(product)
  }

  async remove(id: number) {
    const product = await this.buscarUno(id)
    await this.productRepository.remove(product)
    return 'Producto eliminado';
  }
}
