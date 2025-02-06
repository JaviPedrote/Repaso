import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction, TransactionContents } from './entities/transaction.entity';
import { Product } from '../products/entities/product.entity';
import { CouponsModule } from '../coupons/coupons.module';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction,TransactionContents,Product]),CouponsModule],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
