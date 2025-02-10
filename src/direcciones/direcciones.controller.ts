import { Body, Controller, Get, Post } from '@nestjs/common'
import { DireccionesService } from './direcciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Get()
  async getAll() {
    return await this.direccionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.direccionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.direccionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.direccionesService.deleteMany(deleteManyDto)
  }
}
