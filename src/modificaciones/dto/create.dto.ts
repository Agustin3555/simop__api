import {
  IsInt,
  IsString,
  IsOptional,
  IsDecimal,
  IsDateString,
} from 'class-validator'

export class CreateDto {
  @IsString()
  numeroExpediente: string

  @IsOptional()
  @IsString()
  numeroResolucion?: string

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
  tipoModificacionId?: number
}
