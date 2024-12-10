import { Module } from '@nestjs/common'
import { RelObrasRepresentantesController } from './rel-obras-representantes.controller'
import { RelObrasRepresentantesService } from './rel-obras-representantes.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RelObrasRepresentantesController],
  providers: [RelObrasRepresentantesService, PrismaService],
})
export class RelObrasRepresentantesModule {}
