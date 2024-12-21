import { Controller } from '@nestjs/common'
import { CertificacionesService } from './certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
@Controller('certificaciones')
export class CertificacionesController {
  constructor(
    private readonly certificacionesService: CertificacionesService,
  ) {}

  @Get()
  getAll() {
    return this.certificacionesService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.certificacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.certificacionesService.create(createDto)
  }
}
