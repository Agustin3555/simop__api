import { Module } from '@nestjs/common'
import { RelObrasInspectoresController } from './rel-obras-inspectores.controller'
import { RelObrasInspectoresService } from './rel-obras-inspectores.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RelObrasInspectoresController],
  providers: [RelObrasInspectoresService, PrismaService],
})
export class RelObraInspectorModule {}
