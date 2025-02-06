import { IsNotEmpty } from "class-validator";


export class ApplyCouponDto{

    @IsNotEmpty({message:'El nombre del cupón no pude estar vacío'})
    coupon_name:string
}