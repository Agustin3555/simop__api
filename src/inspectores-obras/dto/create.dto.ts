import { IsBoolean, IsDateString, IsInt, IsOptional } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  @IsOptional()
  vigencia?: boolean

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsInt()
  obraId: number

  @IsInt()
  inspectorId: number

  @IsInt()
  tipoInspectorId: number

  @IsInt()
  tipoProfesionId: number
}
