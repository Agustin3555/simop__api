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
  async getAll() {
    return await this.tiposParalizacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposParalizacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposParalizacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposParalizacionesService.deleteMany(deleteManyDto)
  }
}
