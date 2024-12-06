import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposProfesionesService } from './tipo-profesiones.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-profesiones')
export class TiposProfesionesController {
  constructor(
    private readonly tiposProfesionesService: TiposProfesionesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposProfesionesService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tiposProfesionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposProfesionesService.create(createDto)
  }
}
