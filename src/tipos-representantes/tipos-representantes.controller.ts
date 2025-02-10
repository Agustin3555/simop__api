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
  async getAll() {
    return await this.tiposRepresentantes.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposRepresentantes.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposRepresentantes.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposRepresentantes.deleteMany(deleteManyDto)
  }
}
