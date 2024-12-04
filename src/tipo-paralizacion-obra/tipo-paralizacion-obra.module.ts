import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoParalizacionObraController } from './tipo-paralizacion-obra.controller'
import { TipoParalizacionObraService } from './tipo-paralizacion-obra.service'

@Module({
  controllers: [TipoParalizacionObraController],
  providers: [TipoParalizacionObraService, PrismaService],
})
export class TipoParalizacionObraModule {}
