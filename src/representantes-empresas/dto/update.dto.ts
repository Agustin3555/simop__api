import { IsInt, IsBoolean, IsOptional, IsDateString } from 'class-validator'

export class UpdateDto {
  @IsBoolean()
  @IsOptional()
  vigencia?: boolean

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsInt()
  @IsOptional()
  empresaId?: number

  @IsInt()
  @IsOptional()
  representanteId?: number

  @IsInt()
  @IsOptional()
  tipoRepresentanteId?: number
}
