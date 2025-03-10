import { IsInt, IsBoolean, IsOptional, IsDateString } from 'class-validator'

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
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
