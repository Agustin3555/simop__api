import { Module } from '@nestjs/common'
import { ProvinciaController } from './provincia.controller'
import { ProvinciaService } from './provincia.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [ProvinciaController],
  providers: [ProvinciaService, PrismaService],
})
export class ProvinciaModule {}
