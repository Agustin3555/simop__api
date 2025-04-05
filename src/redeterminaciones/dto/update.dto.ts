import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
  IsBoolean,
} from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsString()
  @IsOptional()
  numeroResolucion?: string

  @IsString()
  @IsOptional()
  numeroExpedienteSolicitud?: string

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
  tipoRedeterminacionId?: number

  @IsDateString()
  @IsOptional()
  fechaCertificacion?: string

  @IsBoolean()
  @IsOptional()
  tieneHijas?: boolean

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
