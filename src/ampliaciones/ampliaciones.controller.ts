import { Body, Controller, Get, Post } from '@nestjs/common'
import { AmpliacionesService } from './ampliaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('ampliaciones')
export class AmpliacionesController {
  constructor(private readonly ampliacionesService: AmpliacionesService) {}

  @Get()
  getAll() {
    return this.ampliacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.ampliacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.ampliacionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.ampliacionesService.deleteMany(deleteManyDto)
  }
}
