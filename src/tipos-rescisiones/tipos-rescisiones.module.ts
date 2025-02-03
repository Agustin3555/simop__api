import { Module } from '@nestjs/common'
import { TiposRescisionesController } from './tipos-rescisiones.controller'
import { TiposRescisionesService } from './tipos-rescisiones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposRescisionesController],
  providers: [TiposRescisionesService, PrismaService],
})
export class TiposRescisionesModule {}
