import { Controller } from '@nestjs/common'
import { InspectoresObrasService } from './inspectores-obras.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

@Controller('inspectores-obras')
export class InspectoresObrasController {
  constructor(private readonly service: InspectoresObrasService) {}

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto)
  }
  @Post('delete-many')
    deleteMany(@Body() deleteManyDto: DeleteManyDto) {
      return this.service.deleteMany(deleteManyDto)
    }
}
