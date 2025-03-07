import { IsInt, IsOptional, IsBoolean, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsInt()
  @IsOptional()
  obraId?: number

  @IsInt()
  @IsOptional()
  inspectorId?: number

  @IsInt()
  @IsOptional()
  tipoInspectorId?: number

  @IsInt()
  @IsOptional()
  tipoProfesionId?: number

  @IsBoolean()
  @IsOptional()
  vigencia?: boolean

  @IsDateString()
  @IsOptional()
  fecha?: Date
}
