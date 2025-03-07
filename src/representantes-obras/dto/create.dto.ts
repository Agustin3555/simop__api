import { IsInt, IsBoolean, IsOptional, IsDateString } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  vigencia: boolean

  @IsOptional()
  @IsDateString()
  fecha?: Date

  @IsInt()
  obraId: number

  @IsInt()
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
