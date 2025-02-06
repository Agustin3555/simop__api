import { Module } from '@nestjs/common'
import { RescisionesController } from './rescisiones.controller'
import { RescisionesService } from './rescisiones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RescisionesController],
  providers: [RescisionesService, PrismaService],
})
export class RescisionesModule {}
