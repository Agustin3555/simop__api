import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposModificacionesService } from './tipos-modificaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-modificaciones')
export class TiposModificacionesController {
  constructor(
    private readonly tiposModificacionesService: TiposModificacionesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposModificacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tiposModificacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposModificacionesService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tiposModificacionesService.deleteMany(deleteManyDto)
  }
}
