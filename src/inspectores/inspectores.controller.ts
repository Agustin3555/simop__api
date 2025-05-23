import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { InspectoresService } from './inspectores.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('inspectores')
export class InspectoresController {
  constructor(private readonly inspectoresService: InspectoresService) {}

  @Get()
  async getAll() {
    return await this.inspectoresService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.inspectoresService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.inspectoresService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.inspectoresService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.inspectoresService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.inspectoresService.deleteMany(deleteManyDto)
  }
}
