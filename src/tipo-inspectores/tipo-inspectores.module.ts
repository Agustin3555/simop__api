import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoInspectoresObrasController } from './tipo-inspectores.controller'
import { TipoInspectoresObrasService } from './tipo-inspectores.service'

@Module({
  controllers: [TipoInspectoresObrasController],
  providers: [TipoInspectoresObrasService, PrismaService],
})
export class TipoInspectoresObrasModule {}
