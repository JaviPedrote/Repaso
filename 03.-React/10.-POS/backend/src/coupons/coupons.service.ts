import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';
import { Repository } from 'typeorm';
import { endOfDay, isAfter} from 'date-fns';

@Injectable()
export class CouponsService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>,
  ) { }
  async create(@Body() createCouponDto: CreateCouponDto) {
    await this.couponRepository.save(createCouponDto);
    return 'Cupon creado correctamente';
  }

  async findAll() {
    const coupons = await this.couponRepository.find();
    return coupons;
  }

  async findOne(id: number) {
    const coupon = await this.couponRepository.findOneBy({ id });
    if (!coupon) {
      throw new NotFoundException({ message: 'El cupón no fue encontrado' });
    }
    return coupon;
  }

  async update(id: number, updateCouponDto: UpdateCouponDto) {
    const coupon = await this.findOne(id);
    Object.assign(coupon, updateCouponDto);
    return await this.couponRepository.save(coupon);
  }

  async remove(id: number) {
    const coupon = await this.findOne(id);
    await this.couponRepository.delete(coupon);

    return { message: `El cupon con el nombre ${coupon.name} fué eliminado` };
  }

  async applyCoupon(couponName: string) {
    const coupon = await this.couponRepository.findOneBy({name: couponName});
    if (!coupon) {
      throw new NotFoundException({ message: 'El cupón no fué encontrado' });
    }
    const currentDate = new Date().toISOString();
    const expirationDate = endOfDay(coupon.expirationDate);

    if (isAfter(currentDate, expirationDate)) {
      throw new BadRequestException({ message: 'Cupón ya expirado' });
    }

    return { message: 'cupón válido', ...coupon };
  }
}
