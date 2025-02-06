import { Product } from '../../products/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  total: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  coupon: string;

  @Column({ type: 'decimal', nullable: true })
  discount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  transactionDate: Date;

  @OneToMany(
    () => TransactionContents,
    (transactionContents) => transactionContents.transaction,
  )
  contents: TransactionContents[];
}

@Entity()
export class TransactionContents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  quantity: number;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Product, (product) => product.id, {
    eager: true,
    cascade: true,
  }) // con eager true se trae el producto en la consulta de transaction contents
  product: Product;

  @ManyToOne(() => Transaction, (transaction) => transaction.contents, {
    cascade: true,
  }) // con cascade true se elimina el contenido de la transaccion al eliminar la transaccion y se actualiza al actualizar la transaccion
  transaction: Transaction;
}
