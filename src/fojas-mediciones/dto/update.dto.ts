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
  fechaFoja?: string

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

  @IsString()
  @IsOptional()
  montoTotal?: number

  @IsString()
  @IsOptional()
  fechaCertificacion?: string

  @IsInt()
  @IsOptional()
  direccionId?: number

  @IsInt()
  @IsOptional()
  departamentoId?: number
}
