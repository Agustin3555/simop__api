import { PrismaService } from '@/prisma.service'
import { Module } from '@nestjs/common'
import { TipoRepresentanteObraObraController } from './tipo-representantes-empresas-obras.controller'
import { TipoRepresentantesEmpresasObrasService } from './tipo-representantes-empresas-obras.service'

@Module({
  controllers: [TipoRepresentanteObraObraController],
  providers: [TipoRepresentantesEmpresasObrasService, PrismaService],
})
export class TipoRepresentantesObrasModule {}
