import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ProvinciasService } from './provincias.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly provinciasService: ProvinciasService) {}

  @Get()
  async getAll() {
    return await this.provinciasService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.provinciasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.provinciasService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.provinciasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.provinciasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.provinciasService.deleteMany(deleteManyDto)
  }
}
