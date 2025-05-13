import { Controller, Param, Put } from '@nestjs/common'
import { ObrasService } from './obras.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('obras')
export class ObrasController {
  constructor(private readonly obrasService: ObrasService) {}

  @Get()
  async getAll() {
    return await this.obrasService.getAll()
  }

  @Get('totales')
  async getAllTotales() {
    return await this.obrasService.getAllTotales()
  }

  @Get('refs')
  async getRefs() {
    return await this.obrasService.getRefs()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.obrasService.getOne(params.id)
  }

  @Get(':id/detalle')
  async getOneDetalle(@Param() params: SearchByIdDto) {
    return await this.obrasService.getOneDetalle(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.obrasService.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.obrasService.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.obrasService.deleteMany(deleteManyDto)
  }
}
