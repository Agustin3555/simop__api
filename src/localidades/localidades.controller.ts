import { Controller } from '@nestjs/common'
import { LocalidadesService } from './localidades.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('localidades')
export class LocalidadesController {
  constructor(private readonly localidadesService: LocalidadesService) {}

  @Get()
  async getAll() {
    return await this.localidadesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.localidadesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.localidadesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.localidadesService.deleteMany(deleteManyDto)
  }
}
