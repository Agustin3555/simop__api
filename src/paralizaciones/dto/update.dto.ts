import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsInt()
  numero?: number

  @IsOptional()
  @IsString()
  numeroExpediente?: string

  @IsOptional()
  @IsDateString()
  fechaReinicio?: Date

  @IsOptional()
  @IsDateString()
  nuevaFechaFinObra?: Date

  @IsOptional()
  @IsDateString()
  fecha?: Date

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsOptional()
  @IsInt()
  obraId?: number

  @IsOptional()
  @IsInt()
  tipoParalizacionId?: number
}
