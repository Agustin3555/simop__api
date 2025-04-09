import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposModificacionesService } from './tipos-modificaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-modificaciones')
export class TiposModificacionesController {
  constructor(
    private readonly tiposModificacionesService: TiposModificacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposModificacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposModificacionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposModificacionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposModificacionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposModificacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposModificacionesService.deleteMany(deleteManyDto)
  }
}
