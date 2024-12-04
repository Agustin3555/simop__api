import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoModificacionObraService } from './tipo-modificacion-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-modificacion-obra')
export class TipoModificacionObraController {
  constructor(
    private readonly tipoModificacionObraService: TipoModificacionObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoModificacionObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoModificacionObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoModificacionObraService.create(createDto)
  }
}
