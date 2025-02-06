import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { Profile } from '../profile/profile.entity';
import { Post } from '../post/post.entity';
import { JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Post, (post) => post.user, { cascade: true })
  posts: Post[];
}
