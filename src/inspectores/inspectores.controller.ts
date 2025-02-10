import { Body, Controller, Get, Post } from '@nestjs/common'
import { InspectoresService } from './inspectores.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('inspectores')
export class InspectoresController {
  constructor(private readonly inspectoresService: InspectoresService) {}

  @Get()
  async getAll() {
    return await this.inspectoresService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.inspectoresService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.inspectoresService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.inspectoresService.deleteMany(deleteManyDto)
  }
}
