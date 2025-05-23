import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { RecepcionesService } from './recepciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('recepciones')
export class RecepcionesController {
  constructor(private readonly recepcionesService: RecepcionesService) {}

  @Get()
  async getAll() {
    return await this.recepcionesService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.recepcionesService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.recepcionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.recepcionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.recepcionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.recepcionesService.deleteMany(deleteManyDto)
  }
}
