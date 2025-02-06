import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
