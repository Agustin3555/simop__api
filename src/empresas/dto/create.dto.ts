import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator'

export class CreateDto {
  @IsOptional()
  @IsInt()
  cuit?: number

  @IsString()
  nombre: string

  @IsOptional()
  @IsString()
  direccion?: string

  @IsOptional()
  @IsInt()
  numeroContacto?: number

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
