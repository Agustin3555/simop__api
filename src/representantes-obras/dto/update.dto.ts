import { IsInt, IsBoolean, IsOptional, IsDate } from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsBoolean()
  vigencia?: boolean

  @IsOptional()
  @IsInt()
  obraId?: number

  @IsOptional()
  @IsInt()
  representanteId?: number

  @IsOptional()
  @IsInt()
  tipoRepresentanteId?: number

  @IsOptional()
  @IsDate()
  fecha?: Date
}
