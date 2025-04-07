import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { DireccionesService } from './direcciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Get()
  async getAll() {
    return await this.direccionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.direccionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.direccionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.direccionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.direccionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.direccionesService.deleteMany(deleteManyDto)
  }
}
