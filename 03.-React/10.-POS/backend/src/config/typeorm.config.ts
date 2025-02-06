import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';
import { join } from "path";


// export const typeOrmConfig: TypeOrmModuleOptions = ({
//     type: 'postgres',
// })


export const typeOrmConfig = (configService:ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASS'),
    database: configService.get('DATABASE_NAME'),
    ssl:true, //Para que se conecte a la base de datos de Heroku en producción 
    logging: false, //Para ver las consultas que se hacen en la base de datos en la consola
    entities: [join(__dirname + '../../**/*.entity.{js,ts}')],//Para que TypeORM pueda encontrar las entidades de la base de datos
    synchronize: true //Para que TypeORM sincronice las entidades con la base de datos
});