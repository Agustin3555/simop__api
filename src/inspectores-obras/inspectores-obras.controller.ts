import { Controller } from '@nestjs/common'
import { InspectoresObrasService } from './inspectores-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

@Controller('inspectores-obras')
export class InspectoresObrasController {
  constructor(private readonly service: InspectoresObrasService) {}

  @Get()
  async getAll() {
    return await this.service.getAll()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.service.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.service.deleteMany(deleteManyDto)
  }
}
