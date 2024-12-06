import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { InspectoresController } from './inspectores.controller'
import { InspectoresService } from './inspectores.service'

@Module({
  controllers: [InspectoresController],
  providers: [InspectoresService, PrismaService],
})
export class InspectoresModule {}
