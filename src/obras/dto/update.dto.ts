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

  @IsInt()
  @IsOptional()
  anioResolucion?: number

  @IsString()
  @IsOptional()
  numeroContratacion?: string

  @IsDateString()
  @IsOptional()
  fechaContratacion?: string

  @IsString()
  @IsOptional()
  montoContratacion?: string

  @IsDateString()
  @IsOptional()
  fechaInicio?: string

  @IsDateString()
  @IsOptional()
  fechaFin?: string

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
  @IsOptional()
  obraNueva?: boolean

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
  @IsOptional()
  obraRefaccionada?: boolean

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

  @IsNumber()
  @IsOptional()
  avanceTotal?: number

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
