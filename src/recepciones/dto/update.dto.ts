import { IsDateString, IsInt, IsOptional, IsString } from 'class-validator'

export class UpdateDto {
  @IsInt()
  @IsOptional()
  numeroActa?: number

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
  tipoRecepcionId?: number
}
