import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { NullToUndefinedInterceptor } from './common/interceptors'

import { SubSecretariasModule } from './sub-secretarias/sub-secretarias.module'
import { DireccionesModule } from './direcciones/direcciones.module'
import { DepartamentosModule } from './departamentos/departamentos.module'
import { PaisModule } from './pais/pais.module'
import { ProvinciasModule } from './provincias/provincias.module'
import { TipoEstadosObrasModule } from './tipos-estados-obras/tipo-estados-obras.module'
import { TipoFinanciamientosObrasModule } from './tipos-financiamientos-obras/tipo-financiamientos-obras.module'
import { TipoModificacionesObrasModule } from './tipos-modificaciones-obras/tipo-modificaciones-obras.module'
import { TipoParalizacionesObrasModule } from './tipos-paralizaciones-obras/tipo-paralizaciones-obras.module'
import { TiposRepresentantesModule } from './tipos-representantes/tipos-representantes.module'
import { TipoTramitesObrasModule } from './tipos-tramites/tipo-tramites.module'
import { TiposProfesionesModule } from './tipos-profesiones/tipos-profesiones.module'
import { TipoTematicasObrasModule } from './tipos-tematicas-obras/tipo-tematicas-obras.module'
import { TiposInspectoresModule } from './tipos-inspectores/tipos-inspectores.module'
import { InspectoresModule } from './inspectores/inspectores.module'
import { TiposProgramasObrasModule } from './tipos-programas-obras/tipos-programas-obras.module'
import { RepresentantesEmpresasModule } from './representantes-empresas/representantes-empresas.module'
import { RepresentantesModule } from './representantes/representantes.module'
import { ObrasModule } from './obras/obras.module'
import { LocalidadesModule } from './localidades/localidades.module'
import { RelObraInspectorModule } from './inspectores-obras/inspectores-obras.module'
import { RepresentantesObrasModule } from './representantes-obras/representantes-obras.module'
import { TiposContratacionesObraModule } from './tipos-contrataciones-obra/tipos-contrataciones-obra.module'
import { EmpresasModule } from './empresas/empresas.module'
import { FojasMedicionesModule } from './fojas-mediciones/fojas-mediciones.module'
import { CertificacionesModule } from './certificaciones/certificaciones.module'
import { PagosCertificacionesModule } from './pagos-certificaciones/pagos-certificaciones.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SubSecretariasModule,
    DireccionesModule,
    DepartamentosModule,
    PaisModule,
    ProvinciasModule,
    TipoEstadosObrasModule,
    TipoFinanciamientosObrasModule,
    TipoModificacionesObrasModule,
    TipoParalizacionesObrasModule,
    TiposRepresentantesModule,
    TipoTramitesObrasModule,
    TiposProfesionesModule,
    TipoTematicasObrasModule,
    TiposInspectoresModule,
    InspectoresModule,
    TiposProgramasObrasModule,
    RepresentantesEmpresasModule,
    RepresentantesModule,
    ObrasModule,
    LocalidadesModule,
    RelObraInspectorModule,
    RepresentantesObrasModule,
    TiposContratacionesObraModule,
    EmpresasModule,
    FojasMedicionesModule,
    CertificacionesModule,
    PagosCertificacionesModule,
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
