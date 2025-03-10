import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class CreateDto {
  @IsString()
  numeroExpediente: string

  @IsString()
  @IsOptional()
  numeroResolucion?: string

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
  tipoRescisionId?: number
}
