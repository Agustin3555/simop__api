import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProvinciasService } from './provincias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Get()
  getAll() {
    return this.provinciasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.provinciasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.provinciasService.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.provinciasService.deleteMany(deleteManyDto)
    }
}
