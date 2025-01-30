import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateDto {
  @IsString()
  cuil: string

  @IsString()
  apellido: string

  @IsOptional()
  @IsString()
  nombre?: string

  @IsOptional()
  @IsString()
  direccion?: string

  @IsOptional()
  @IsString()
  numeroMatricula?: string

  @IsOptional()
  @IsInt()
  paisId?: number

  @IsOptional()
  @IsInt()
  provinciaId?: number

  @IsOptional()
  @IsInt()
  localidadId?: number
}
