import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRecepcionesService } from './tipos-recepciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-recepciones')
export class TiposRecepcionesController {
  constructor(
    private readonly tiposRecepcionesService: TiposRecepcionesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposRecepcionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tiposRecepcionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposRecepcionesService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tiposRecepcionesService.deleteMany(deleteManyDto)
  }
}
