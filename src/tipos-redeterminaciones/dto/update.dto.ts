import { IsString, IsOptional } from 'class-validator'

export class UpdateDto {
  @IsString()
  @IsOptional()
  nombre?: string
}
