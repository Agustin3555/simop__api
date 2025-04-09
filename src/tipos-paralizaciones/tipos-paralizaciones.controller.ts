import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposParalizacionesService } from './tipos-paralizaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-paralizaciones')
export class TiposParalizacionesController {
  constructor(
    private readonly tiposParalizacionesService: TiposParalizacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposParalizacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposParalizacionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposParalizacionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposParalizacionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposParalizacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposParalizacionesService.deleteMany(deleteManyDto)
  }
}
