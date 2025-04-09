import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ParalizacionesService } from './paralizaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('paralizaciones')
export class ParalizacionesController {
  constructor(private readonly paralizacionesService: ParalizacionesService) {}

  @Get()
  async getAll() {
    return await this.paralizacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.paralizacionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.paralizacionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.paralizacionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.paralizacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.paralizacionesService.deleteMany(deleteManyDto)
  }
}
