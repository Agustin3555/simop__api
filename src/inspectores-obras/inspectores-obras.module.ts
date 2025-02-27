import { Module } from '@nestjs/common'
import { InspectoresObrasController } from './inspectores-obras.controller'
import { InspectoresObrasService } from './inspectores-obras.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [InspectoresObrasController],
  providers: [InspectoresObrasService, PrismaService],
})
export class InspectoresObrasModule {}
