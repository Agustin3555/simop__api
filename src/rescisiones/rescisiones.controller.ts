import { Body, Controller, Get, Post } from '@nestjs/common'
import { RescisionesService } from './rescisiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('rescisiones')
export class RescisionesController {
  constructor(private readonly rescisionesService: RescisionesService) {}

  @Get()
  getAll() {
    return this.rescisionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.rescisionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.rescisionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.rescisionesService.deleteMany(deleteManyDto)
  }
}
