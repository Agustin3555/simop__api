import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  IsDate,
  Min,
} from 'class-validator'

export class CreateDto {
  @IsInt()
  @Min(1)
  numero: number

  @IsString()
  @IsOptional()
  numeroExpediente?: string

  @IsNumber()
  @IsOptional()
  avance?: number

  @IsDate()
  @IsOptional()
  fecha?: Date

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @Min(1)
  obraNumero: number

  @IsInt()
  @Min(1)
  inspectorId: number
}
