import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ModificacionesService } from './modificaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('modificaciones')
export class ModificacionesController {
  constructor(private readonly modificacionesService: ModificacionesService) {}

  @Get()
  async getAll() {
    return await this.modificacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.modificacionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.modificacionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.modificacionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.modificacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.modificacionesService.deleteMany(deleteManyDto)
  }
}
