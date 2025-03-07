import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  numero?: string

  @IsString()
  @IsOptional()
  nombre?: string

  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsOptional()
  @IsString()
  numeroResolucion?: string

  @IsOptional()
  @IsInt()
  anioResolucion?: number

  @IsOptional()
  @IsString()
  numeroContratacion?: string

  @IsOptional()
  @IsDateString()
  fechaContratacion?: string

  @IsString()
  @IsOptional()
  montoContratacion?: string

  @IsOptional()
  @IsDateString()
  fechaInicio?: string

  @IsOptional()
  @IsDateString()
  fechaFin?: string

  @IsOptional()
  @IsInt()
  plazoMeses?: number

  @IsOptional()
  @IsInt()
  plazoDias?: number

  @IsOptional()
  @IsString()
  direccion?: string

  @IsOptional()
  @IsString()
  lugar?: string

  @IsOptional()
  @IsString()
  nomenclaturaCatastral?: string

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsBoolean()
  @IsOptional()
  obraNueva?: boolean

  @IsOptional()
  @IsNumber()
  porcentajeObraNueva?: number

  @IsOptional()
  @IsNumber()
  metrosCuadradosObraNueva?: number

  @IsOptional()
  @IsNumber()
  metrosLinealesObraNueva?: number

  @IsOptional()
  @IsString()
  observacionesObraNueva?: string

  @IsBoolean()
  @IsOptional()
  obraRefaccionada?: boolean

  @IsOptional()
  @IsNumber()
  porcentajeObraRefaccionada?: number

  @IsOptional()
  @IsNumber()
  metrosCuadradosObraRefaccionada?: number

  @IsOptional()
  @IsNumber()
  metrosLinealesObraRefaccionada?: number

  @IsOptional()
  @IsString()
  observacionesObraRefaccionada?: string

  @IsOptional()
  @IsInt()
  empresaId?: number

  @IsOptional()
  @IsInt()
  tipoContratacionObraId?: number

  @IsOptional()
  @IsInt()
  tipoFinanciamientoObraId?: number

  @IsOptional()
  @IsInt()
  tipoProgramaObraId?: number

  @IsOptional()
  @IsInt()
  tipoTematicaObraId?: number

  @IsOptional()
  @IsInt()
  tipoEstadoObraId?: number

  @IsOptional()
  @IsInt()
  localidadId?: number
}
