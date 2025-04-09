import { Controller, Param, Put } from '@nestjs/common'
import { InspectoresObrasService } from './inspectores-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('inspectores-obras')
export class InspectoresObrasController {
  constructor(private readonly service: InspectoresObrasService) {}

  @Get()
  async getAll() {
    return await this.service.getAll()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.service.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.service.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.service.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.service.deleteMany(deleteManyDto)
  }
}
