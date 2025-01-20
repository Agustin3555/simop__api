import { IsInt, IsBoolean } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  vigencia: boolean

  @IsInt()
  empresaId: number

  @IsInt()
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
