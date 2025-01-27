import { Controller } from '@nestjs/common'
import { LocalidadesService } from './localidades.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Get()
  getAll() {
    return this.localidadesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.localidadesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.localidadesService.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.localidadesService.deleteMany(deleteManyDto)
    }
}
