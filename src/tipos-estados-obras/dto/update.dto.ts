import { IsString, IsOptional } from 'class-validator'

export class UpdateDto {
  @IsOptional()
  @IsString()
  nombre?: string
}
