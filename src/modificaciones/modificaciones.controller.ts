import { Body, Controller, Get, Post } from '@nestjs/common'
import { ModificacionesService } from './modificaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('modificaciones')
export class ModificacionesController {
  constructor(private readonly modificacionesService: ModificacionesService) {}

  @Get()
  async getAll() {
    return await this.modificacionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.modificacionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.modificacionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.modificacionesService.deleteMany(deleteManyDto)
  }
}
