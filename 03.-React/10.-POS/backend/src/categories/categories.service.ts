import { Injectable,HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>
  ) {}

  crear(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;
    return this.categoryRepository.save(category);
  }

  buscarTodas() {
    return this.categoryRepository.find();
  }

  async buscarUna(id: number) {
    const category = await this.categoryRepository.findOneBy({id});
    if(!category){
      throw new HttpException('No existe la categoria',HttpStatus.NOT_FOUND)
    }
    return category
  }

 async actualizar(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category =await this.buscarUna(id);
    category.name = updateCategoryDto.name;
    return this.categoryRepository.save(category)
  }

  async eliminar(id: number) {

    const category = await this.buscarUna(id)
    await this.categoryRepository.delete(category)
    return `Categoria ${category.name} eliminada`
  }
}
