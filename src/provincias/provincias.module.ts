import { Module } from '@nestjs/common'
import { ProvinciasController } from './provincias.controller'
import { ProvinciasService } from './provincias.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [ProvinciasController],
  providers: [ProvinciasService, PrismaService],
})
export class ProvinciasModule {}
