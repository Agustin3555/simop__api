import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TiposRepresentantesController } from './tipos-representantes.controller'
import { TiposRepresentantesService } from './tipos-representantes.service'

@Module({
  controllers: [TiposRepresentantesController],
  providers: [TiposRepresentantesService, PrismaService],
})
export class TiposRepresentantesModule {}
