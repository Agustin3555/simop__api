import { IsInt, IsOptional, IsString, IsDate } from 'class-validator'

export class CreateDto {
  @IsInt()
  id: number

  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsDate()
  @IsOptional()
  fecha?: Date

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  fojaMedicionId: number

  @IsDate()
  creado: Date

  @IsDate()
  modificado: Date
}
