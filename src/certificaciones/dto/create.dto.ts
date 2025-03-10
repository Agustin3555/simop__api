import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator'

export class CreateDto {
  @IsString()
  numeroExpediente: string

  @IsNumber()
  @IsOptional()
  monto?: number

  @IsDateString()
  @IsOptional()
  fecha?: string

  @IsString()
  @IsOptional()
  observaciones?: string

  @IsInt()
  fojaMedicionId: number
}
