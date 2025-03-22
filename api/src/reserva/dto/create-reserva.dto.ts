import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservaDto {
  @IsNotEmpty()
  @IsEmail()
  emailCliente!: string;

  @IsNotEmpty()
  espacioId!: number;

  @IsNotEmpty()
  @IsString()
  fechaReserva!: string;

  @IsNotEmpty()
  @IsString()
  horaInicio!: string;

  @IsNotEmpty()
  @IsString()
  horaFin!: string;
}
