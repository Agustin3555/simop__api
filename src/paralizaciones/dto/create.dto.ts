import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class CreateDto {
  @IsInt()
  numero: number

  @IsString()
  numeroExpediente: string

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
}
