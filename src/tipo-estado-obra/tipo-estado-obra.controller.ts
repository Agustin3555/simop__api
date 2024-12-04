import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoEstadoObraService } from './tipo-estado-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-estado-obra')
export class TipoEstadoObraController {
  constructor(private readonly tipoEstadoObraService: TipoEstadoObraService) {}

  @Get()
  getAll() {
    return this.tipoEstadoObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoEstadoObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoEstadoObraService.create(createDto)
  }
}
