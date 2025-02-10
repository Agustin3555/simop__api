import { Controller } from '@nestjs/common'
import { RepresentantesObrasService } from './representantes-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

@Controller('representantes-obras')
export class RepresentantesObrasController {
  constructor(
    private readonly representantesObrasServices: RepresentantesObrasService,
  ) {}

  @Get()
  async getAll() {
    return await this.representantesObrasServices.getAll()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.representantesObrasServices.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.representantesObrasServices.deleteMany(deleteManyDto)
  }
}
