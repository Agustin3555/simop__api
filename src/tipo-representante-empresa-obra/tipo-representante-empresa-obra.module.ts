import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoRepresentanteObraObraController } from './tipo-representante-empresa-obra.controller'
import { TipoRepresentanteEmpresaObraService } from './tipo-representante-empresa-obra.service'

@Module({
  controllers: [TipoRepresentanteObraObraController],
  providers: [TipoRepresentanteEmpresaObraService, PrismaService],
})
export class TipoRepresentanteObraModule {}
