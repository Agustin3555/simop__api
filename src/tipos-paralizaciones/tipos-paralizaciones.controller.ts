import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposParalizacionesService } from './tipos-paralizaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-paralizaciones')
export class TiposParalizacionesController {
  constructor(
    private readonly tiposParalizacionesService: TiposParalizacionesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposParalizacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tiposParalizacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposParalizacionesService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tiposParalizacionesService.deleteMany(deleteManyDto)
  }
}
