import { IsInt, IsBoolean, IsOptional } from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsBoolean()
  vigencia?: boolean

  @IsOptional()
  @IsInt()
  empresaId?: number

  @IsOptional()
  @IsInt()
  representanteId?: number

  @IsOptional()
  @IsInt()
  tipoRepresentanteId?: number
}
