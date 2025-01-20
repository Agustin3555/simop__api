import { IsInt, IsBoolean } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  vigencia: boolean

  @IsInt()
  obraId: number

  @IsInt()
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
