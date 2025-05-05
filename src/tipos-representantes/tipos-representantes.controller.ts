import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposRepresentantesService } from './tipos-representantes.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-representantes')
export class TiposRepresentantesController {
  constructor(
    private readonly tiposRepresentantes: TiposRepresentantesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposRepresentantes.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tiposRepresentantes.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposRepresentantes.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposRepresentantes.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposRepresentantes.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposRepresentantes.deleteMany(deleteManyDto)
  }
}
