import { Module } from '@nestjs/common'
import { RepresentantesController } from './representantes.controller'
import { RepresentantesService } from './representantes.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RepresentantesController],
  providers: [RepresentantesService, PrismaService],
})
export class RepresentantesModule {}
