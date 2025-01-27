import { Controller } from '@nestjs/common'
import { CertificacionesService } from './certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'

@Controller('certificaciones')
export class CertificacionesController {
  constructor(private readonly service: CertificacionesService) {}

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.service.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto)
  }
}
