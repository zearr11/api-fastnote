import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  names: string;

  @Column()
  lastnames: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'date_creation', type: 'timestamp' })
  readonly dateCreation: Date
}