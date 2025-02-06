import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

import { IdValidationPipe } from '../common/pipes/id-validation/id-validation.pipe';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  findAll(@Query('transactionDate') transactionDate:string) {

    return this.transactionService.findAll(transactionDate);
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: string) {
    return this.transactionService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
