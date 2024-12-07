import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TiposInspectoresController } from './tipos-inspectores.controller'
import { TiposInspectoresService } from './tipos-inspectores.service'

@Module({
  controllers: [TiposInspectoresController],
  providers: [TiposInspectoresService, PrismaService],
})
export class TiposInspectoresModule {}
