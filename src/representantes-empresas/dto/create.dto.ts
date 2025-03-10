import { IsInt, IsBoolean, IsDateString, IsOptional } from 'class-validator'

export class CreateDto {
  @IsBoolean()
  @IsOptional()
  vigencia?: boolean

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsInt()
  empresaId: number

  @IsInt()
  representanteId: number

  @IsInt()
  tipoRepresentanteId: number
}
