import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoTematicasObrasService } from './tipo-tematicas-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-tematicas-obra')
export class TipoTematicasObrasController {
  constructor(
    private readonly tipoTematicasObrasService: TipoTematicasObrasService,
  ) {}

  @Get()
  getAll() {
    return this.tipoTematicasObrasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tipoTematicasObrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tipoTematicasObrasService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tipoTematicasObrasService.deleteMany(deleteManyDto)
  }
}
