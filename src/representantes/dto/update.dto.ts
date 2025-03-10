import { IsInt, IsOptional, IsString } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  cuil?: string

  @IsString()
  @IsOptional()
  apellido?: string

  @IsString()
  @IsOptional()
  nombre?: string

  @IsString()
  @IsOptional()
  direccion?: string

  @IsString()
  @IsOptional()
  numeroMatricula?: string

  @IsInt()
  @IsOptional()
  paisId?: number

  @IsInt()
  @IsOptional()
  provinciaId?: number

  @IsInt()
  @IsOptional()
  localidadId?: number
}
