import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // <- Importante
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // <- Exporta si lo usas en otro módulo
})
export class UsersModule {}
