import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string

  @IsInt()
  numeroResolucion: number

  @IsInt()
  anioResolucion: number

  @IsInt()
  numeroContratacion: number

  @IsInt()
  anioContratacion: number

  @IsInt()
  montoContratacion: number

  @IsInt()
  numeroExpediente: number

  @IsString()
  nomenclaturaCatastral: string

  @IsInt()
  plazoMeses: number

  @IsInt()
  plazoDias: number

  @IsOptional()
  @IsDateString()
  fechaInicio?: Date

  @IsOptional()
  @IsDateString()
  fechaFin?: Date

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsOptional()
  @IsInt()
  paisId?: number

  @IsOptional()
  @IsInt()
  provinciaId?: number

  @IsOptional()
  @IsInt()
  localidadId?: number

  @IsOptional()
  @IsInt()
  tipoFinanciamientoId?: number

  @IsOptional()
  @IsInt()
  tipoTematicaId?: number

  @IsOptional()
  @IsInt()
  tipoEstadoId?: number

  @IsOptional()
  @IsInt()
  empresaId?: number
}
