import { IsInt } from 'class-validator'

export class CreateDto {
  @IsInt()
  obraId: number

  @IsInt()
  representanteId: number
}
