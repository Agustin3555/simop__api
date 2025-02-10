import { Body, Controller, Get, Post } from '@nestjs/common'
import { ParalizacionesService } from './paralizaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('paralizaciones')
export class ParalizacionesController {
  constructor(private readonly paralizacionesService: ParalizacionesService) {}

  @Get()
  async getAll() {
    return await this.paralizacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.paralizacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.paralizacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.paralizacionesService.deleteMany(deleteManyDto)
  }
}
