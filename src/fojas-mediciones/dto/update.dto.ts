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
  @IsOptional()
  obraId?: number

  @IsInt()
  @Min(1)
  @IsOptional()
  inspectorId?: number
}
