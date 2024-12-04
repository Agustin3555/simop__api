import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoFinanciamientoObraController } from './tipo-financiamiento-obra.controller'
import { TipoFinanciamientoObraService } from './tipo-financiamiento-obra.service'

@Module({
  controllers: [TipoFinanciamientoObraController],
  providers: [TipoFinanciamientoObraService, PrismaService],
})
export class TipoFinanciamientoObraModule {}
