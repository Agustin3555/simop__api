import { IsInt, IsString, IsOptional, IsEmail } from 'class-validator'

export class CreateDto {
  @IsInt()
  cuit: number

  @IsString()
  nombre: string

  @IsString()
  direccion: string

  @IsInt()
  numeroContacto: number

  @IsEmail()
  email: string

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
