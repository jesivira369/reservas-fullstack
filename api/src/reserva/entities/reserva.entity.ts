import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Espacio } from '../../espacio/entities/espacio.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Espacio, { eager: true })
  espacio!: Espacio;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  emailCliente!: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  fechaReserva!: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  horaInicio!: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  horaFin!: string;
}
