import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRescisionesService } from './tipos-rescisiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-rescisiones')
export class TiposRescisionesController {
  constructor(
    private readonly tiposRescisionesService: TiposRescisionesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposRescisionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tiposRescisionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposRescisionesService.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tiposRescisionesService.deleteMany(deleteManyDto)
  }
}
