import { IsString, IsInt } from 'class-validator'

export class CreateDto {
  @IsString()
  nombre: string

  @IsInt()
  provinciaId: number
}
