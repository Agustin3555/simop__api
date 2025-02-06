import { IsInt, IsOptional, IsString, IsDate } from 'class-validator'

export class CreateDto {
  @IsInt()
  numeroActa: number

  @IsOptional()
  @IsDate()
  fecha?: Date

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
