import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { Product } from '../products/entities/product.entity';
import { Category } from '../categories/entities/category.entity';

@Module({
imports: [
    ConfigModule.forRoot({ // Importa y configura el módulo de configuración de NestJS
        isGlobal: true,  // Permite que el módulo sea accesible en toda la aplicación sin necesidad de importarlo en otros módulos
    }),
    TypeOrmModule.forRootAsync({ // Importa y configura TypeORM de forma asíncrona para gestionar la base de datos
        useFactory: typeOrmConfig,  // Usa una función de fábrica para devolver la configuración de la conexión a la base de datos
        inject: [ConfigService]  // Inyecta el servicio de configuración para acceder a variables de entorno en la configuración de TypeORM
    }),
    TypeOrmModule.forFeature([Product,Category]) // Importa los repositorios de TypeORM para que estén disponibles en el módulo
],
providers: [SeederService] // Registra SeederService como proveedor para la inyección de dependencias, encargado de poblar la base de datos con datos iniciales
})
export class SeederModule { }
