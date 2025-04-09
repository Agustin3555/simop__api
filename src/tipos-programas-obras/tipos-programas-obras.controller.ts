import { Controller, Param, Put } from '@nestjs/common'
import { Get, Post, Body } from '@nestjs/common'
import { TiposProgramasObrasService } from './tipos-programas-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

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

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tipoProgramasObras.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoProgramasObras.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tipoProgramasObras.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoProgramasObras.deleteMany(deleteManyDto)
  }
}
