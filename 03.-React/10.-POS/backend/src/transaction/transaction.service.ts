/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, BadRequestException, Query } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {
    Transaction,
    TransactionContents,
} from './entities/transaction.entity';
import { Between, FindManyOptions, Repository } from 'typeorm';
import { Product } from '../products/entities/product.entity';
import { endOfDay, isValid, parseISO, startOfDay } from 'date-fns';
import { CouponsService } from '../coupons/coupons.service';

@Injectable()
export class TransactionService {
    constructor(
        @InjectRepository(Transaction) private readonly transactionRepository: Repository<Transaction>,
        @InjectRepository(TransactionContents) private readonly transactionContentsRepository: Repository<TransactionContents>,
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        private readonly couponsService: CouponsService
    ) { }
    async create(createTransactionDto: CreateTransactionDto) {
        await this.productRepository.manager.transaction(
            async (transactionalEntityManager) => {
                const transaction = new Transaction();
                const total = createTransactionDto.contents.reduce((total, item) => { return total + item.price * item.quantity; }, 0,);
                transaction.total = total

                if (createTransactionDto.coupon) {
                    const coupon = await this.couponsService.applyCoupon(createTransactionDto.coupon)
                    const discount = (coupon.porcentage / 100) * total
                    transaction.total = total - discount
                    transaction.coupon = coupon.name
                    transaction.discount = discount
                }
                for (const content of createTransactionDto.contents) {
                    const product = await transactionalEntityManager.findOneBy(Product, {
                        id: content.productId,
                    });

                    const errors: string[] = [];
                    if (!product) {
                        errors.push(`El producto con id ${content.productId} no existe`)
                        throw new BadRequestException(errors);
                    }
                    if (content.quantity > product.inventory) {
                        errors.push(
                            `No hay suficiente stock para el producto ${product.name}`,
                        );
                        throw new BadRequestException(errors);
                    }
                    product.inventory = product.inventory - content.quantity;

                    //Crear instancia de TransactionContents
                    const transactionContent = new TransactionContents();
                    transactionContent.quantity = content.quantity;
                    transactionContent.price = content.price;
                    transactionContent.product = product;
                    transactionContent.transaction = transaction;

                    await transactionalEntityManager.save(transaction);
                    await transactionalEntityManager.save(transactionContent);
                }
            },
        );

        return 'Venta almacenada correctamente';
    }

    findAll(transactionDate?: string) {
        const options: FindManyOptions = {
            relations: ['contents'],
        };
        if (transactionDate) {
            const date = parseISO(transactionDate);
            console.log(date);
            if (!isValid(date)) {
                throw new BadRequestException('Fecha invalida');
            }

            const start = startOfDay(date);
            const end = endOfDay(date);

            options.where = {
                transactionDate: Between(start, end),
            };
        }
        return this.transactionRepository.find(options);
    }

    async findOne(id: number) {
        const transaction = await this.transactionRepository.findOne({
            where: {
                id,
            },
            relations: {
                contents: true,
            },
        });

        if (!transaction) {
            throw new BadRequestException('Transaccion no encontrada');
        }
        return transaction;
    }

    async remove(id: number) {
        const transaction = await this.findOne(id);

        for (const contents of transaction.contents) {
            const transactionContents =
                await this.transactionContentsRepository.findOneBy({ id: contents.id });
            const product = await this.productRepository.findOneBy({
                id: contents.product.id,
            });
            if (!product) {
                throw new BadRequestException('Producto no encontrado');
            }
            product.inventory = product.inventory + contents.quantity;
            await this.productRepository.save(product);

            if (!transactionContents) {
                throw new BadRequestException('Contenido de transaccion no encontrado');
            }

            await this.transactionContentsRepository.remove(transactionContents);
        }

        await this.transactionRepository.remove(transaction);
        return { message: 'Transaccion eliminada correctamente' };
    }
}
