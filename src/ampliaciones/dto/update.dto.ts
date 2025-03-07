import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsInt()
  @IsOptional()
  numero?: number

  @IsString()
  @IsOptional()
  numeroResolucion?: string

  @IsString()
  @IsOptional()
  numeroExpedienteSolicitud?: string

  @IsInt()
  @IsOptional()
  plazoMesesSolicitado?: number

  @IsInt()
  @IsOptional()
  plazoMesesOtorgado?: number

  @IsOptional()
  @IsDateString()
  nuevaFechaFinObra?: string

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  obraId?: number
}
