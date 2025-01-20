import { Module } from '@nestjs/common'
import { RepresentantesEmpresasController } from './representantes-empresas.controller'
import { RepresentantesEmpresasService } from './representantes-empresas.service'
import { PrismaService } from '@/prisma.service'

@Module({
  controllers: [RepresentantesEmpresasController],
  providers: [RepresentantesEmpresasService, PrismaService],
})
export class RepresentantesEmpresasModule {}
