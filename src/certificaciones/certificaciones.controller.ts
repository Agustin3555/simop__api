import { Controller, Param, Put } from '@nestjs/common'
import { CertificacionesService } from './certificaciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('certificaciones')
export class CertificacionesController {
  constructor(private readonly service: CertificacionesService) {}

  @Get()
  async getAll() {
    return await this.service.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.service.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.service.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.service.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.service.deleteMany(deleteManyDto)
  }
}
