import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
} from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsString()
  numeroExpediente?: string

  @IsOptional()
  @IsString()
  numeroResolucion?: string

  @IsOptional()
  @IsString()
  numeroExpedienteSolicitud?: string

  @IsOptional()
  @IsDecimal()
  monto?: number

  @IsOptional()
  @IsDecimal()
  nuevoMontoObra?: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsOptional()
  @IsInt()
  obraId?: number

  @IsOptional()
  @IsInt()
  tipoRedeterminacionId?: number
}
