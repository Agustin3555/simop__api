import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposInspectoresService } from './tipos-inspectores.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-inspectores')
export class TiposInspectoresController {
  constructor(
    private readonly tiposInspectoresService: TiposInspectoresService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposInspectoresService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tiposInspectoresService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposInspectoresService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposInspectoresService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposInspectoresService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposInspectoresService.deleteMany(deleteManyDto)
  }
}
