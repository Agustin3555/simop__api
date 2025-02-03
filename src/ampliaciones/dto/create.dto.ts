import { IsInt, IsOptional, IsString, IsDate } from 'class-validator'

export class CreateDto {
  @IsInt()
  numero: number

  @IsString()
  numeroResolucion: string

  @IsString()
  @IsOptional()
  numeroExpedienteSolicitud?: string

  @IsInt()
  @IsOptional()
  plazoMesesSolicitado?: number

  @IsInt()
  @IsOptional()
  plazoMesesOtorgado?: number

  @IsDate()
  @IsOptional()
  nuevaFechaFinObra?: Date

  @IsDate()
  @IsOptional()
  fecha: Date

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @IsOptional()
  obraId?: number
}
