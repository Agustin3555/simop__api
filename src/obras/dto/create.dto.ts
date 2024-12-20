import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateDto {
  @IsNumber()
  numero: number

  @IsString()
  nombre: string

  @IsInt()
  @IsOptional()
  numeroExpediente?: string

  @IsInt()
  @IsOptional()
  numeroResolucion?: string

  @IsInt()
  @IsOptional()
  anioResolucion?: number

  @IsInt()
  @IsOptional()
  numeroContratacion?: number

  @IsInt()
  @IsOptional()
  anioContratacion?: number

  @IsNumber()
  @IsOptional()
  montoContratacion?: number

  @IsDateString()
  @IsOptional()
  fechaInicio?: Date

  @IsDateString()
  @IsOptional()
  fechaFin?: Date

  @IsInt()
  @IsOptional()
  plazoMeses?: number

  @IsInt()
  @IsOptional()
  plazoDias?: number

  @IsString()
  @IsOptional()
  direccion?: string

  @IsString()
  @IsOptional()
  lugar?: string

  @IsString()
  @IsOptional()
  nomenclaturaCatastral?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsBoolean()
  obraNueva: boolean

  @IsNumber()
  @IsOptional()
  porcentajeObraNueva?: number

  @IsNumber()
  @IsOptional()
  metrosCuadradosObraNueva?: number

  @IsNumber()
  @IsOptional()
  metrosLinealesObraNueva?: number

  @IsString()
  @IsOptional()
  observacionesObraNueva?: string

  @IsBoolean()
  obraRefaccionada: boolean

  @IsNumber()
  @IsOptional()
  porcentajeObraRefaccionada?: number

  @IsNumber()
  @IsOptional()
  metrosCuadradosObraRefaccionada?: number

  @IsNumber()
  @IsOptional()
  metrosLinealesObraRefaccionada?: number

  @IsString()
  @IsOptional()
  observacionesObraRefaccionada?: string

  @IsInt()
  @IsOptional()
  empresaId?: number

  @IsInt()
  @IsOptional()
  tipoContratacionObraId?: number

  @IsInt()
  @IsOptional()
  tipoFinanciamientoObraId?: number

  @IsInt()
  @IsOptional()
  tipoProgramaObraId?: number

  @IsInt()
  @IsOptional()
  tipoTematicaObraId?: number

  @IsInt()
  @IsOptional()
  tipoEstadoObraId?: number

  @IsInt()
  @IsOptional()
  localidadId?: number
}
