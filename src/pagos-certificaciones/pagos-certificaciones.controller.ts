import { Controller, Param, Put } from '@nestjs/common'
import { PagosCertificacionesService } from './pagos-certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('pagos-certificaciones')
export class PagosCertificacionesController {
  constructor(
    private readonly pagoCertificacionesService: PagosCertificacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.pagoCertificacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.pagoCertificacionesService.getForConnect()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.pagoCertificacionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.pagoCertificacionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.pagoCertificacionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.pagoCertificacionesService.deleteMany(deleteManyDto)
  }
}
