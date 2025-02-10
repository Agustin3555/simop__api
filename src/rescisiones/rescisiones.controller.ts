import { Body, Controller, Get, Post } from '@nestjs/common'
import { RescisionesService } from './rescisiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('rescisiones')
export class RescisionesController {
  constructor(private readonly rescisionesService: RescisionesService) {}

  @Get()
  async getAll() {
    return await this.rescisionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.rescisionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.rescisionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.rescisionesService.deleteMany(deleteManyDto)
  }
}
