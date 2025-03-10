import { IsInt, IsOptional, IsString } from 'class-validator'

export class CreateDto {
  @IsString()
  cuil: string

  @IsString()
  apellido: string

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
