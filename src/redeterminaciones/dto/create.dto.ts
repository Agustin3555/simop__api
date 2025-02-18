import {
  IsInt,
  IsOptional,
  IsString,
  IsDecimal,
  IsDateString,
} from 'class-validator'

export class CreateDto {
  @IsString()
  numeroExpediente: string

  @IsString()
  @IsOptional()
  numeroResolucion?: string

  @IsString()
  @IsOptional()
  numeroExpedienteCertificado?: string

  @IsString()
  @IsOptional()
  numeroExpedienteSolicitud?: string

  @IsDecimal()
  @IsOptional()
  monto?: number

  @IsDecimal()
  @IsOptional()
  nuevoMontoObra?: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  certificacionId?: number

  @IsInt()
  @IsOptional()
  tipoRedeterminacionId?: number
}
