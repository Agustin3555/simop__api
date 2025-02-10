import { Body, Controller, Get, Post } from '@nestjs/common'
import { TipoParalizacionesObrasService } from './tipo-paralizaciones-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipo-paralizaciones-obras')
export class TipoParalizacionesObrasController {
  constructor(
    private readonly tipoParalizacionesObrasService: TipoParalizacionesObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoParalizacionesObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoParalizacionesObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoParalizacionesObrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoParalizacionesObrasService.deleteMany(deleteManyDto)
  }
}
