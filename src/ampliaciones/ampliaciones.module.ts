import { Module } from '@nestjs/common'
import { AmpliacionesController } from './ampliaciones.controller'
import { AmpliacionesService } from './ampliaciones.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [AmpliacionesController],
  providers: [AmpliacionesService, PrismaService],
  exports: [AmpliacionesService],
})
export class AmpliacionesModule {}
