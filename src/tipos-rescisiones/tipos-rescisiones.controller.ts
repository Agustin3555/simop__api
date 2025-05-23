import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposRescisionesService } from './tipos-rescisiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-rescisiones')
export class TiposRescisionesController {
  constructor(
    private readonly tiposRescisionesService: TiposRescisionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposRescisionesService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tiposRescisionesService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposRescisionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposRescisionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposRescisionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposRescisionesService.deleteMany(deleteManyDto)
  }
}
