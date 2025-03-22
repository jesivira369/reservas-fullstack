import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEspacioDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  nombre!: string;

  @IsNotEmpty()
  @IsEnum(UbicacionEspacio)
  ubicacion!: UbicacionEspacio;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(50)
  capacidad!: number;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  descripcion?: string;
}
