import { IsInt } from 'class-validator'

export class CreateDto {
  @IsInt()
  obraNumero: number

  @IsInt()
  inspectorId: number

  @IsInt()
  tipoInspectorId: number

  @IsInt()
  tipoProfesionId: number
}