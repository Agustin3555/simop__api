import { Module } from '@nestjs/common'
import { ObrasController } from './obras.controller'
import { ObrasService } from './obras.service'
import { PrismaService } from '@/prisma.service'
import { FojasMedicionesModule } from '@/fojas-mediciones/fojas-mediciones.module'
import { RedeterminacionesModule } from '@/redeterminaciones/redeterminaciones.module'
import { AmpliacionesModule } from '@/ampliaciones/ampliaciones.module'
import { ModificacionesModule } from '@/modificaciones/modificaciones.module'
import { ParalizacionesModule } from '@/paralizaciones/paralizaciones.module'
import { RescisionesModule } from '@/rescisiones/rescisiones.module'
import { RecepcionesModule } from '@/recepciones/recepciones.module'

@Module({
  controllers: [ObrasController],
  providers: [ObrasService, PrismaService],
  imports: [
    FojasMedicionesModule,
    RedeterminacionesModule,
    AmpliacionesModule,
    ModificacionesModule,
    ParalizacionesModule,
    RescisionesModule,
    RecepcionesModule,
  ],
})
export class ObrasModule {}
