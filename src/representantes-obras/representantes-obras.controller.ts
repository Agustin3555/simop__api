import { Controller, Param, Put } from '@nestjs/common'
import { RepresentantesObrasService } from './representantes-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto, SearchByIdDto } from '@/common/dto'
import { UpdateDto } from './dto/update.dto'

@Controller('representantes-obras')
export class RepresentantesObrasController {
  constructor(
    private readonly representantesObrasServices: RepresentantesObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.representantesObrasServices.getAll()
  }

  @Get(':id')
  async getOne(@Param() params: SearchByIdDto) {
    return await this.representantesObrasServices.getOne(params.id)
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.representantesObrasServices.create(createDto)
  }

  @Put(':id')
  async updateOne(@Param() params: SearchByIdDto, @Body() data: UpdateDto) {
    return await this.representantesObrasServices.updateOne(params.id, data)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.representantesObrasServices.deleteMany(deleteManyDto)
  }
}
