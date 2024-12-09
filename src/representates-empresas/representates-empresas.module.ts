import { Module } from '@nestjs/common'
import { RepresentatesEmpresasController } from './representates-empresas.controller'
import { RepresentatesEmpresasService } from './representates-empresas.service'
import { PrismaService } from '@/prisma.service'
@Module({
  controllers: [RepresentatesEmpresasController],
  providers: [RepresentatesEmpresasService, PrismaService],
})
export class RepresentatesEmpresasModule {}
