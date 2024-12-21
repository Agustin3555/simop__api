import { IsInt, IsOptional, IsString, IsDecimal, IsDate } from 'class-validator'

export class CreateDto {
  @IsInt()
  id: number

  @IsOptional()
  @IsString()
  numeroExpediente?: string

  @IsOptional()
  @IsString()
  numeroResolucion?: string

  @IsOptional()
  @IsDecimal()
  monto?: number

  @IsOptional()
  @IsDate()
  fecha?: Date

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsInt()
  certificacionId: number

  @IsDate()
  creado: Date

  @IsDate()
  modificado: Date
}
