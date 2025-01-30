import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsDateString,
} from 'class-validator'

export class CreateDto {
  @IsInt()
  @Min(1)
  numero: number

  @IsString()
  numeroExpediente: string

  @IsOptional()
  @IsNumber()
  avance?: number

  @IsOptional()
  @IsDateString()
  fecha?: string

  @IsOptional()
  @IsString()
  observaciones?: string

  @IsInt()
  @Min(1)
  obraId: number

  @IsInt()
  @Min(1)
  inspectorId: number
}
