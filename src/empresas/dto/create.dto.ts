import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator'

export class CreateDto {
  @IsString()
  cuit: string

  @IsString()
  nombre: string

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
