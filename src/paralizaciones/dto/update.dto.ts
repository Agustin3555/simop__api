import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsInt()
  @IsOptional()
  numero?: number

  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsDateString()
  @IsOptional()
  fechaReinicio?: string

  @IsDateString()
  @IsOptional()
  nuevaFechaFinObra?: string

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
  tipoParalizacionId?: number
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
