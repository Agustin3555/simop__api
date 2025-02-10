import { Controller } from '@nestjs/common'
import { Get, Post, Body } from '@nestjs/common'
import { TiposProgramasObrasService } from './tipos-programas-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('tipos-programas-obra')
export class TiposProgramasObrasController {
  constructor(
    private readonly tipoProgramasObras: TiposProgramasObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoProgramasObras.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoProgramasObras.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoProgramasObras.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoProgramasObras.deleteMany(deleteManyDto)
  }
}
