import { IsString, IsInt, IsOptional, IsBoolean } from 'class-validator'

export class CreateDto {
  @IsInt()
  cuit: number

  @IsString()
  apellido: string

  @IsString()
  nombre: string

  @IsString()
  direccion: string

  @IsString()
  numeroMatricula: string

  @IsBoolean()
  vigencia: boolean

  @IsOptional()
  @IsInt()
  paisId?: number

  @IsOptional()
  @IsInt()
  provinciaId?: number

  @IsOptional()
  @IsInt()
  localidadId?: number

  @IsOptional()
  @IsInt()
  tipoRepresentanteId?: number
}
