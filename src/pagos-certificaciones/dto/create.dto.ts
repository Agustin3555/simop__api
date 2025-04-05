import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
  IsNumber,
} from 'class-validator'

export class CreateDto {
  @IsNumber()
  numero: number

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
  certificacionId: number

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
