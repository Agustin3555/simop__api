import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator'

export class CreateDto {
  @IsNumber()
  ordenPago: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsNumber()
  monto?: number

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsInt()
  fojaMedicionId: number
}
