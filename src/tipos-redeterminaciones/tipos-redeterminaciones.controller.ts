import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposRedeterminacionesService } from './tipos-redeterminaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-redeterminaciones')
export class TiposRedeterminacionesController {
  constructor(
    private readonly tipoRedeterminaciones: TiposRedeterminacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoRedeterminaciones.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tipoRedeterminaciones.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tipoRedeterminaciones.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoRedeterminaciones.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tipoRedeterminaciones.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoRedeterminaciones.deleteMany(deleteManyDto)
  }
}
