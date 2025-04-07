import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { NullToUndefinedInterceptor } from './common/interceptors'

import { SubSecretariasModule } from './sub-secretarias/sub-secretarias.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { PaisesModule } from './paises/paises.module'
import { ProvinciasModule } from './provincias/provincias.module'
import { LocalidadesModule } from './localidades/localidades.module'
import { TiposProfesionesModule } from './tipos-profesiones/tipos-profesiones.module'
import { TiposInspectoresModule } from './tipos-inspectores/tipos-inspectores.module'
import { TiposRepresentantesModule } from './tipos-representantes/tipos-representantes.module'
import { TiposContratacionesObraModule } from './tipos-contrataciones-obra/tipos-contrataciones-obra.module'
import { TiposFinanciamientosObrasModule } from './tipos-financiamientos-obras/tipo-financiamientos-obras.module'
import { TiposProgramasObrasModule } from './tipos-programas-obras/tipos-programas-obras.module'
import { TiposTematicasObrasModule } from './tipos-tematicas-obras/tipo-tematicas-obras.module'
import { TiposEstadosObrasModule } from './tipos-estados-obras/tipo-estados-obras.module'
import { TiposRedeterminacionesModule } from './tipos-redeterminaciones/tipos-redeterminaciones.module'
import { TiposModificacionesModule } from './tipos-modificaciones/tipos-modificaciones.module'
import { TiposParalizacionesModule } from './tipos-paralizaciones/tipos-paralizaciones.module'
import { TiposRescisionesModule } from './tipos-rescisiones/tipos-rescisiones.module'
import { TiposRecepcionesModule } from './tipos-recepciones/tipos-recepciones.module'
import { InspectoresModule } from './inspectores/inspectores.module'
import { RepresentantesModule } from './representantes/representantes.module'
import { EmpresasModule } from './empresas/empresas.module'
import { RepresentantesEmpresasModule } from './representantes-empresas/representantes-empresas.module'
import { ObrasModule } from './obras/obras.module'
import { RepresentantesObrasModule } from './representantes-obras/representantes-obras.module'
import { InspectoresObrasModule } from './inspectores-obras/inspectores-obras.module'
import { FojasMedicionesModule } from './fojas-mediciones/fojas-mediciones.module'
import { PagosCertificacionesModule } from './pagos-certificaciones/pagos-certificaciones.module'
import { RedeterminacionesModule } from './redeterminaciones/redeterminaciones.module'
import { AmpliacionesModule } from './ampliaciones/ampliaciones.module'
import { ModificacionesModule } from './modificaciones/modificaciones.module'
import { ParalizacionesModule } from './paralizaciones/paralizaciones.module'
import { RescisionesModule } from './rescisiones/rescisiones.module'
import { RecepcionesModule } from './recepciones/recepciones.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SubSecretariasModule,
    DireccionesModule,
    DepartamentosModule,
    PaisesModule,
    ProvinciasModule,
    LocalidadesModule,
    TiposProfesionesModule,
    TiposInspectoresModule,
    TiposRepresentantesModule,
    TiposContratacionesObraModule,
    TiposFinanciamientosObrasModule,
    TiposProgramasObrasModule,
    TiposTematicasObrasModule,
    TiposEstadosObrasModule,
    TiposRedeterminacionesModule,
    TiposModificacionesModule,
    TiposParalizacionesModule,
    TiposRescisionesModule,
    TiposRecepcionesModule,
    InspectoresModule,
    RepresentantesModule,
    EmpresasModule,
    RepresentantesEmpresasModule,
    ObrasModule,
    RepresentantesObrasModule,
    InspectoresObrasModule,
    FojasMedicionesModule,
    PagosCertificacionesModule,
    RedeterminacionesModule,
    AmpliacionesModule,
    ModificacionesModule,
    ParalizacionesModule,
    RescisionesModule,
    RecepcionesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: NullToUndefinedInterceptor,
    },
  ],
})
export class AppModule {}
