import { Controller } from '@nestjs/common'
import { ObrasService } from './obras.service'
import { Get, Post, Body } from '@nestjs/common'
import { CreateDto } from './dto/create.dto'
import { DeleteManyDto } from '@/common/dto'

@Controller('obras')
export class ObrasController {
  constructor(private readonly obrasService: ObrasService) {}

  @Get()
  async getAll() {
    return await this.obrasService.getAll()
  }

  @Get('for-connect')
  async getForConnect() {
    return await this.obrasService.getForConnect()
  }

  @Post()
  async create(@Body() createDto: CreateDto) {
    return await this.obrasService.create(createDto)
  }

  @Post('delete-many')
  async deleteMany(@Body() deleteManyDto: DeleteManyDto) {
    return await this.obrasService.deleteMany(deleteManyDto)
  }
}
