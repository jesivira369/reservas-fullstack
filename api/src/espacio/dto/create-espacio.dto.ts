import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEspacioDto {
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsNotEmpty()
  @IsString()
  ubicacion!: string;

  @IsNotEmpty()
  @IsNumber()
  capacidad!: number;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
