import { Module } from '@nestjs/common'
import { RedeterminacionesService } from './redeterminaciones.service'
import { RedeterminacionesController } from './redeterminaciones.controller'
import { PrismaService } from '@/prisma.service'

@Module({
  providers: [RedeterminacionesService, PrismaService],
  controllers: [RedeterminacionesController],
  exports: [RedeterminacionesService],
})
export class RedeterminacionesModule {}
