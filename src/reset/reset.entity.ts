import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({
    unique: true,
  })
  token: string;
}
