import { Controller } from '@nestjs/common'
import { ObrasService } from './obras.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
@Controller('obras')
export class ObrasController {
  constructor(private readonly obrasService: ObrasService) {}

  @Get()
  getAll() {
    return this.obrasService.getAll()
  }

  @Get('for-connect')
  getForConnect() {
    return this.obrasService.getForConnect()
  }

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.obrasService.create(createDto)
  }
}
