import { Module } from '@nestjs/common'
import { EmpresasController } from './empresas.controller'
import { EmpresasService } from './empresas.service'
import { PrismaService } from '@/prisma.service'
@Module({
  controllers: [EmpresasController],
  providers: [EmpresasService, PrismaService],
})
export class EmpresasModule {}
