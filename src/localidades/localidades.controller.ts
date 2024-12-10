import { Controller } from '@nestjs/common'
import { LocalidadesService } from './localidades.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from '@/sub-secretarias/dto/create.dto'
@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Get()
  getAll() {
    return this.localidadesService.getAll()
  }

  @Get('/for-connect')
  getForConnect() {
    return this.localidadesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.localidadesService.create(createDto)
  }
}
