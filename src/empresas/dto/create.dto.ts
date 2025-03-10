import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator'

export class CreateDto {
  @IsString()
  cuit: string

  @IsString()
  nombre: string

  @IsString()
  @IsOptional()
  direccion?: string

  @IsString()
  @IsOptional()
  numeroContacto?: string

  @IsEmail()
  @IsOptional()
  email?: string

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
