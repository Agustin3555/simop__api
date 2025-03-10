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

  @IsNumber()
  @IsOptional()
  avance?: number

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @Min(1)
  obraId: number

  @IsInt()
  @Min(1)
  inspectorId: number
}
