import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoFinanciamientosObrasController } from './tipo-financiamientos-obras.controller'
import { TipoFinanciamientosObrasService } from './tipo-financiamientos-obras.service'

@Module({
  controllers: [TipoFinanciamientosObrasController],
  providers: [TipoFinanciamientosObrasService, PrismaService],
})
export class TipoFinanciamientosObrasModule {}
