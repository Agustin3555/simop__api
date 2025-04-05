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
  fechaFoja?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  @Min(1)
  obraId: number

  @IsInt()
  @Min(1)
  inspectorId: number

  @IsDateString()
  @IsOptional()
  fechaCertificacion?: string

  @IsNumber()
  @IsOptional()
  montoTotal?: number

  @IsInt()
  @IsOptional()
  direccionId?: number

  @IsInt()
  @IsOptional()
  departamentoId?: number
}
