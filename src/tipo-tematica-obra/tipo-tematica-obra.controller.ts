import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTematicaObraService } from './tipo-tematica-obra.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipo-tematica-obra')
export class TipoTematicaObraController {
  constructor(
    private readonly tipoTematicaObraService: TipoTematicaObraService,
  ) {}

  @Get()
  getAll() {
    return this.tipoTematicaObraService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoTematicaObraService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoTematicaObraService.create(createDto)
  }
}
