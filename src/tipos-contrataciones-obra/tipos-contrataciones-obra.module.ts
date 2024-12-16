import { Module } from '@nestjs/common'
import { TiposContratacionesObraController } from './tipos-contrataciones-obra.controller'
import { TiposContratacionesObraService } from './tipos-contrataciones-obra.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [TiposContratacionesObraController],
  providers: [TiposContratacionesObraService, PrismaService],
})
export class TiposContratacionesObraModule {}
