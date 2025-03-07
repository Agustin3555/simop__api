import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  cuit?: string

  @IsString()
  @IsOptional()
  nombre?: string

  @IsOptional()
  @IsString()
  direccion?: string

  @IsOptional()
  @IsString()
  numeroContacto?: string

  @IsOptional()
  @IsEmail()
  email?: string

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
