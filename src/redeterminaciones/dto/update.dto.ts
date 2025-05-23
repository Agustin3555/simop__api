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

  @IsString()
  @IsOptional()
  montoTotal?: string

  @IsDecimal()
  @IsOptional()
  nuevoMontoObra?: number

  @IsDateString()
  @IsOptional()
  fechaRedeterminacion?: string

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
