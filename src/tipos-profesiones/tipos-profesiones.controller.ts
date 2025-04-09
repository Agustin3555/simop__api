import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TiposProfesionesService } from './tipos-profesiones.service'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

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

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.tiposProfesionesService.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.tiposProfesionesService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.tiposProfesionesService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.tiposProfesionesService.deleteMany(deleteManyDto)
  }
}
