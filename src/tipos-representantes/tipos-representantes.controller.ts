import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRepresentantesService } from './tipos-representantes.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-representantes')
export class TiposRepresentantesController {
  constructor(
    private readonly tiposRepresentantes: TiposRepresentantesService,
  ) {}

  @Get()
  getAll() {
    return this.tiposRepresentantes.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.tiposRepresentantes.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.tiposRepresentantes.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.tiposRepresentantes.deleteMany(deleteManyDto)
  }
}
