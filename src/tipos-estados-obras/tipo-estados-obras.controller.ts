import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TipoEstadosObrasService } from './tipo-estados-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-estados-obra')
export class TipoEstadosObrasController {
  constructor(
    private readonly tipoEstadosObrasService: TipoEstadosObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoEstadosObrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.tipoEstadosObrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoEstadosObrasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tipoEstadosObrasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoEstadosObrasService.deleteMany(deleteManyDto)
  }
}
