import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposInspectoresService } from './tipos-inspectores.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-inspectores')
export class TiposInspectoresController {
  constructor(
    private readonly tiposInspectoresService: TiposInspectoresService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposInspectoresService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposInspectoresService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposInspectoresService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposInspectoresService.deleteMany(deleteManyDto)
  }
}
