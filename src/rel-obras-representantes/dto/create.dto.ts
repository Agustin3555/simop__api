import { IsInt } from 'class-validator'

export class CreateDto {
  @IsInt()
  obraNumero: number

  @IsInt()
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
