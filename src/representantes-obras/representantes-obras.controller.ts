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
  getAll() {
    return this.representantesObrasServices.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.representantesObrasServices.create(createDto)
  }

  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.representantesObrasServices.deleteMany(deleteManyDto)
  }
}
