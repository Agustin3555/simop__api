import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator'

export class CreateDto {
  @IsInt()
  numeroActa: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsOptional()
  @IsInt()
  obraId?: number

  @IsOptional()
  @IsInt()
  tipoRecepcionId?: number
}
