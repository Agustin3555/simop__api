import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposRecepcionesService } from './tipos-recepciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-recepciones')
export class TiposRecepcionesController {
  constructor(
    private readonly tiposRecepcionesService: TiposRecepcionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposRecepcionesService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tiposRecepcionesService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposRecepcionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposRecepcionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposRecepcionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposRecepcionesService.deleteMany(deleteManyDto)
  }
}
