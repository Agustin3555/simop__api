import { Module } from '@nestjs/common'
import { RelEmpresasRepresentantesController } from './rel-empresas-representantes.controller'
import { RelEmpresasRepresentantesService } from './rel-empresas-representantes.service'
import { PrismaService } from '@/prisma.service'
@Module({
  controllers: [RelEmpresasRepresentantesController],
  providers: [RelEmpresasRepresentantesService, PrismaService],
})
export class RelEmpresasRepresentantesModule {}
