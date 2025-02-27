import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoEstadosObrasController } from './tipo-estados-obras.controller'
import { TipoEstadosObrasService } from './tipo-estados-obras.service'

@Module({
  controllers: [TipoEstadosObrasController],
  providers: [TipoEstadosObrasService, PrismaService],
})
export class TiposEstadosObrasModule {}
