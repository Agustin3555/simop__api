import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoTramitesObrasController } from './tipo-tramites.controller'
import { TipoTramitesObrasService } from './tipo-tramites.service'

@Module({
  controllers: [TipoTramitesObrasController],
  providers: [TipoTramitesObrasService, PrismaService],
})
export class TipoTramitesObrasModule {}
