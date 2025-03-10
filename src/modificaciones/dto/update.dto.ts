import {
  IsInt,
  IsString,
  IsOptional,
  IsDecimal,
  IsDateString,
} from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsString()
  @IsOptional()
  numeroResolucion?: string

  @IsDecimal()
  @IsOptional()
  monto?: number

  @IsDecimal()
  @IsOptional()
  nuevoMontoObra?: number

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  obraId?: number

  @IsInt()
  @IsOptional()
  tipoModificacionId?: number
}
