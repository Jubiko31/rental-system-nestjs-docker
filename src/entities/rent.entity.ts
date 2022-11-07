import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  lastDate: string;

  @Column()
  rent_price: number;

  @Column()
  car_id: string;
}
