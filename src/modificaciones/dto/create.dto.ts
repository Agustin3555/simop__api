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
