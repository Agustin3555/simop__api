import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { PaisesController } from './paises.controller'
import { PaisesService } from './paises.service'

@Module({
  controllers: [PaisesController],
  providers: [PaisesService, PrismaService],
})
export class PaisesModule {}
