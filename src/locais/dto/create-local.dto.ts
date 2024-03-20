import {
  IsNumber,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateLocalDto {
  @IsNumber()
  @Min(50)
  @Max(200000)
  capacidade: number;

  @IsString()
  @Length(8, 8)
  CEP: string;

  @IsString()
  @MinLength(4)
  @MaxLength(50)
  logradouro: string;

  @IsNumber()
  @Min(1)
  @Max(10000)
  numero: number;

  @IsString()
  @MinLength(4)
  @MaxLength(25)
  bairro: string;

  @IsString()
  @MinLength(3)
  @MaxLength(25)
  cidade: string;

  @IsString()
  @Length(2, 2)
  UF: string;
}
