import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
  IsBoolean,
  IsNumber,
} from 'class-validator'

export class CreateDto {
  @IsString()
  numeroExpedienteSolicitud: string

  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsString()
  @IsOptional()
  numeroResolucion?: string

  @IsNumber()
  @IsOptional()
  montoTotal?: number

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
