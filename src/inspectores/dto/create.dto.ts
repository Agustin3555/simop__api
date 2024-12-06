import { IsString } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string
  apellido: string
  cuil: string
}
