import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsString()
  numeroExpediente?: string

  @IsOptional()
  @IsString()
  numeroResolucion?: string

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
  tipoRescisionId?: number
}
