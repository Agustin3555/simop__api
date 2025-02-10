import { Body, Controller, Get, Post } from '@nestjs/common'
import { TiposRedeterminacionesService } from './tipos-redeterminaciones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-redeterminaciones')
export class TiposRedeterminacionesController {
  constructor(
    private readonly tipoRedeterminaciones: TiposRedeterminacionesService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoRedeterminaciones.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoRedeterminaciones.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoRedeterminaciones.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoRedeterminaciones.deleteMany(deleteManyDto)
  }
}
