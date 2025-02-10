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
  async getAll() {
    return await this.tiposModificacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposModificacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposModificacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposModificacionesService.deleteMany(deleteManyDto)
  }
}
