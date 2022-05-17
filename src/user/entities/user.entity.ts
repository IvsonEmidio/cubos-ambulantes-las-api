import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAddress } from './user_address.entity';
import { UserContacts } from './user_contacts.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  full_name: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  rg: string;

  @Column({ type: 'varchar', length: 11, unique: true, nullable: false })
  cpf: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  profile_picture_url: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'timestamp', nullable: true })
  birth_date: Date;

  @Column({ type: 'timestamp', nullable: false })
  created_at: Date;

  @OneToOne((type) => UserAddress)
  @JoinColumn()
  address: UserAddress;

  @OneToOne((type) => UserContacts)
  @JoinColumn()
  contacts: UserContacts;
}