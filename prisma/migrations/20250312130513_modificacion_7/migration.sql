-- DropIndex
DROP INDEX `Departamento_direccionId_fkey` ON `departamento`;

-- DropIndex
DROP INDEX `Direccion_subSecretariaId_fkey` ON `direccion`;

-- DropIndex
DROP INDEX `Empresa_localidadId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `Empresa_paisId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `Empresa_provinciaId_fkey` ON `empresa`;

-- DropIndex
DROP INDEX `FojaMedicion_inspectorId_fkey` ON `fojamedicion`;

-- DropIndex
DROP INDEX `InspectorObra_inspectorId_fkey` ON `inspectorobra`;

-- DropIndex
DROP INDEX `InspectorObra_tipoInspectorId_fkey` ON `inspectorobra`;

-- DropIndex
DROP INDEX `InspectorObra_tipoProfesionId_fkey` ON `inspectorobra`;

-- DropIndex
DROP INDEX `Localidad_provinciaId_fkey` ON `localidad`;

-- DropIndex
DROP INDEX `Modificacion_obraId_fkey` ON `modificacion`;

-- DropIndex
DROP INDEX `Modificacion_tipoModificacionId_fkey` ON `modificacion`;

-- DropIndex
DROP INDEX `Obra_empresaId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_localidadId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoContratacionObraId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoEstadoObraId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoFinanciamientoObraId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoProgramaObraId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Obra_tipoTematicaObraId_fkey` ON `obra`;

-- DropIndex
DROP INDEX `Paralizacion_tipoParalizacionId_fkey` ON `paralizacion`;

-- DropIndex
DROP INDEX `Provincia_paisId_fkey` ON `provincia`;

-- DropIndex
DROP INDEX `Recepcion_obraId_fkey` ON `recepcion`;

-- DropIndex
DROP INDEX `Recepcion_tipoRecepcionId_fkey` ON `recepcion`;

-- DropIndex
DROP INDEX `Redeterminacion_obraId_fkey` ON `redeterminacion`;

-- DropIndex
DROP INDEX `Redeterminacion_tipoRedeterminacionId_fkey` ON `redeterminacion`;

-- DropIndex
DROP INDEX `RelInspectorTipoProfesion_tipoProfesionId_fkey` ON `relinspectortipoprofesion`;

-- DropIndex
DROP INDEX `Representante_localidadId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_paisId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_provinciaId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `RepresentanteEmpresa_representanteId_fkey` ON `representanteempresa`;

-- DropIndex
DROP INDEX `RepresentanteEmpresa_tipoRepresentanteId_fkey` ON `representanteempresa`;

-- DropIndex
DROP INDEX `RepresentanteObra_representanteId_fkey` ON `representanteobra`;

-- DropIndex
DROP INDEX `RepresentanteObra_tipoRepresentanteId_fkey` ON `representanteobra`;

-- DropIndex
DROP INDEX `Rescision_obraId_fkey` ON `rescision`;

-- DropIndex
DROP INDEX `Rescision_tipoRescisionId_fkey` ON `rescision`;

-- AlterTable
ALTER TABLE `obra` ADD COLUMN `avanceTotal` DOUBLE NULL;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteEmpresa` ADD CONSTRAINT `RepresentanteEmpresa_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoContratacionObraId_fkey` FOREIGN KEY (`tipoContratacionObraId`) REFERENCES `TipoContratacionObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoFinanciamientoObraId_fkey` FOREIGN KEY (`tipoFinanciamientoObraId`) REFERENCES `TipoFinanciamientoObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoProgramaObraId_fkey` FOREIGN KEY (`tipoProgramaObraId`) REFERENCES `TipoProgramaObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoTematicaObraId_fkey` FOREIGN KEY (`tipoTematicaObraId`) REFERENCES `TipoTematicaObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_tipoEstadoObraId_fkey` FOREIGN KEY (`tipoEstadoObraId`) REFERENCES `TipoEstadoObra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Obra` ADD CONSTRAINT `Obra_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoInspectorId_fkey` FOREIGN KEY (`tipoInspectorId`) REFERENCES `TipoInspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InspectorObra` ADD CONSTRAINT `InspectorObra_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RepresentanteObra` ADD CONSTRAINT `RepresentanteObra_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificacion` ADD CONSTRAINT `Certificacion_fojaMedicionId_fkey` FOREIGN KEY (`fojaMedicionId`) REFERENCES `FojaMedicion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoCertificacion` ADD CONSTRAINT `PagoCertificacion_certificacionId_fkey` FOREIGN KEY (`certificacionId`) REFERENCES `Certificacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Redeterminacion` ADD CONSTRAINT `Redeterminacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Redeterminacion` ADD CONSTRAINT `Redeterminacion_tipoRedeterminacionId_fkey` FOREIGN KEY (`tipoRedeterminacionId`) REFERENCES `TipoRedeterminacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ampliacion` ADD CONSTRAINT `Ampliacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modificacion` ADD CONSTRAINT `Modificacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modificacion` ADD CONSTRAINT `Modificacion_tipoModificacionId_fkey` FOREIGN KEY (`tipoModificacionId`) REFERENCES `TipoModificacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paralizacion` ADD CONSTRAINT `Paralizacion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paralizacion` ADD CONSTRAINT `Paralizacion_tipoParalizacionId_fkey` FOREIGN KEY (`tipoParalizacionId`) REFERENCES `TipoParalizacion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rescision` ADD CONSTRAINT `Rescision_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rescision` ADD CONSTRAINT `Rescision_tipoRescisionId_fkey` FOREIGN KEY (`tipoRescisionId`) REFERENCES `TipoRescision`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recepcion` ADD CONSTRAINT `Recepcion_obraId_fkey` FOREIGN KEY (`obraId`) REFERENCES `Obra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recepcion` ADD CONSTRAINT `Recepcion_tipoRecepcionId_fkey` FOREIGN KEY (`tipoRecepcionId`) REFERENCES `TipoRecepcion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
