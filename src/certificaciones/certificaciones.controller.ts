import { Controller } from '@nestjs/common'
import { CertificacionesService } from './certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

@Controller('certificaciones')
export class CertificacionesController {
  constructor(private readonly service: CertificacionesService) {}

  @Get()
  async getAll() {
    return await this.service.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.service.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.service.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.service.deleteMany(deleteManyDto)
  }
}
