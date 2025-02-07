import { Controller } from '@nestjs/common'
import { FojasMedicionesService } from './fojas-mediciones.service'
import { CreateDto } from './dto/create.dto'
import { Body, Get, Post } from '@nestjs/common'
import { DeleteManyDto } from '@/common/dto'

@Controller('fojas-mediciones')
export class FojasMedicionesController {
  constructor(private readonly service: FojasMedicionesService) {}

  @Get()
  getAll() {
    return this.service.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.service.getForConnect()
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
