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

  @IsOptional()
  @IsString()
  ordenPago?: string

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsDecimal()
  monto?: number

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsInt()
  certificacionId: number
}
