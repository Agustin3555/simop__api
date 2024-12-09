import { IsInt } from 'class-validator'

export class CreateDto {
  @IsInt()
  empresaId: number

  @IsInt()
  representanteId: number
}
