import { IsBoolean, IsDateString, IsInt } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  vigencia?: boolean

  @IsDateString()
  fecha?: Date

  @IsInt()
  obraId: number

  @IsInt()
  inspectorId: number

  @IsInt()
  tipoInspectorId: number

  @IsInt()
  tipoProfesionId: number
}
