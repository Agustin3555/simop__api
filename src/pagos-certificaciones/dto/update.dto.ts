import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
} from 'class-validator'

export class UpdateDto {
  @IsInt()
  @IsOptional()
  numero?: number

  @IsString()
  @IsOptional()
  ordenPago?: string

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsDecimal()
  @IsOptional()
  monto?: number

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  redeterminacionId?: number

  @IsInt()
  @IsOptional()
  direccionId?: number

  @IsInt()
  @IsOptional()
  departamentoId?: number
}
