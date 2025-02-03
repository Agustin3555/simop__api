import { RedeterminacionesService } from './redeterminaciones.service'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'
@Controller('redeterminaciones')
export class RedeterminacionesController {
  constructor(
    private readonly redeterminacionesService: RedeterminacionesService,
  ) {}

  @Get()
  getAll() {
    return this.redeterminacionesService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.redeterminacionesService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.redeterminacionesService.create(createDto)
  }
  @Post('delete-many')
  deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return this.redeterminacionesService.deleteMany(deleteManyDto)
  }
}
