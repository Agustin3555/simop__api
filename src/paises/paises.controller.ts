import { Body, Controller, Get, Post } from '@nestjs/common'
import { PaisesService } from './paises.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisService: PaisesService) {}

  @Get()
  getAll() {
    return this.paisService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.paisService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.paisService.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.paisService.deleteMany(deleteManyDto)
    }
}
