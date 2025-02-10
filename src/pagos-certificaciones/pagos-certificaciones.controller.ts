import { Controller } from '@nestjs/common'
import { PagosCertificacionesService } from './pagos-certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

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

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.pagoCertificacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.pagoCertificacionesService.deleteMany(deleteManyDto)
  }
}
