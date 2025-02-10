import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposContratacionesObraService } from './tipos-contrataciones-obra.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-contrataciones-obra')
export class TiposContratacionesObraController {
  constructor(
    private readonly tiposContratacionesObraService: TiposContratacionesObraService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposContratacionesObraService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposContratacionesObraService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposContratacionesObraService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposContratacionesObraService.deleteMany(deleteManyDto)
  }
}
