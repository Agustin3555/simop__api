import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposProfesionesService } from './tipos-profesiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-profesiones')
export class TiposProfesionesController {
  constructor(
    private readonly tiposProfesionesService: TiposProfesionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tiposProfesionesService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tiposProfesionesService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposProfesionesService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposProfesionesService.deleteMany(deleteManyDto)
  }
}
