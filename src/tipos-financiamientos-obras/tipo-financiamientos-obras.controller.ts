import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TipoFinanciamientosObrasService } from './tipo-financiamientos-obras.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('tipos-financiamientos-obra')
export class TipoFinanciamientosObrasController {
  constructor(
    private readonly tipoFinanciamientosObrasService: TipoFinanciamientosObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.tipoFinanciamientosObrasService.getAll()
  }

  @Get('refs')
  async getRefs() {
    return await this.tipoFinanciamientosObrasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tipoFinanciamientosObrasService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tipoFinanciamientosObrasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tipoFinanciamientosObrasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tipoFinanciamientosObrasService.deleteMany(deleteManyDto)
  }
}
