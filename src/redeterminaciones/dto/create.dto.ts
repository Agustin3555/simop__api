import { IsInt, IsOptional, IsString, IsDecimal, IsDate } from 'class-validator'

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

  @IsDate()
  @IsOptional()
  fecha?: Date

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
