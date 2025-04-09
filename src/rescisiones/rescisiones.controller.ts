import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { RescisionesService } from './rescisiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

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

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.rescisionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.rescisionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.rescisionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.rescisionesService.deleteMany(deleteManyDto)
  }
}
