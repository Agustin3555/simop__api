import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoInspectorObraController } from './tipo-inspector.controller'
import { TipoInspectorObraService } from './tipo-inspector.service'

@Module({
  controllers: [TipoInspectorObraController],
  providers: [TipoInspectorObraService, PrismaService],
})
export class TipoInspectorObraModule {}
