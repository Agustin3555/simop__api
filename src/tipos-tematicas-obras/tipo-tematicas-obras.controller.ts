import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTematicasObrasService } from './tipo-tematicas-obras.service'
import { CreateDto } from './dto/create.dto'

@Controller('tipos-tematicas-obras')
export class TipoTematicasObrasController {
  constructor(
    private readonly tipoTematicasObrasService: TipoTematicasObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoTematicasObrasService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.tipoTematicasObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoTematicasObrasService.create(createDto)
  }
}
