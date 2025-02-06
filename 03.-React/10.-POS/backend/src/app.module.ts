import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { TransactionModule } from './transaction/transaction.module';
import { CouponsModule } from './coupons/coupons.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //Con esto se puede acceder a las variables de entorno en cualquier parte de la aplicación
    }),
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmConfig,  //Se llama a la función que se importó de typeorm.config.ts
      inject: [ConfigService]  //Se inyecta el servicio ConfigService para poder acceder a las variables de entorno en la función typeOrmConfig 

    }),
    CategoriesModule,
    ProductsModule,
    TransactionModule,
    CouponsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
