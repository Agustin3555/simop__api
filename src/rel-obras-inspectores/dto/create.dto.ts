import { IsInt, IsOptional } from 'class-validator'

export class CreateDto {
  @IsInt()
  obraId: number

  @IsInt()
  inspectorId: number

  @IsOptional()
  @IsInt()
  tipoInspectorId?: number
}
