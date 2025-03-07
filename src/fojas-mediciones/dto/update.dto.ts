import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsDateString,
} from 'class-validator'

export class UpdateDto {
  @IsInt()
  @Min(1)
  @IsOptional()
  numero?: number

  @IsString()
  @IsOptional()
  numeroExpediente?: string

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
  @IsOptional()
  obraId?: number

  @IsInt()
  @Min(1)
  @IsOptional()
  inspectorId?: number
}
