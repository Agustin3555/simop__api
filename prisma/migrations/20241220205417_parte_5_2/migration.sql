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
DROP INDEX `Localidad_provinciaId_fkey` ON `localidad`;

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
DROP INDEX `PagoCertificacion_certificacionId_fkey` ON `pagocertificacion`;

-- DropIndex
DROP INDEX `Provincia_paisId_fkey` ON `provincia`;

-- DropIndex
DROP INDEX `RelEmpresaRepresentante_representanteId_fkey` ON `relempresarepresentante`;

-- DropIndex
DROP INDEX `RelInspectorTipoProfesion_tipoProfesionId_fkey` ON `relinspectortipoprofesion`;

-- DropIndex
DROP INDEX `RelObraInspector_inspectorId_fkey` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraInspector_tipoInspectorId_fkey` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraInspector_tipoProfesionId_fkey` ON `relobrainspector`;

-- DropIndex
DROP INDEX `RelObraRepresentante_representanteId_fkey` ON `relobrarepresentante`;

-- DropIndex
DROP INDEX `RelObraRepresentante_tipoRepresentanteId_fkey` ON `relobrarepresentante`;

-- DropIndex
DROP INDEX `Representante_localidadId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_paisId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_provinciaId_fkey` ON `representante`;

-- DropIndex
DROP INDEX `Representante_tipoRepresentanteId_fkey` ON `representante`;

-- AlterTable
ALTER TABLE `obra` MODIFY `numeroResolucion` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_localidadId_fkey` FOREIGN KEY (`localidadId`) REFERENCES `Localidad`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Representante` ADD CONSTRAINT `Representante_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelEmpresaRepresentante` ADD CONSTRAINT `RelEmpresaRepresentante_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelEmpresaRepresentante` ADD CONSTRAINT `RelEmpresaRepresentante_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelInspectorTipoProfesion` ADD CONSTRAINT `RelInspectorTipoProfesion_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_obraNumero_fkey` FOREIGN KEY (`obraNumero`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_tipoInspectorId_fkey` FOREIGN KEY (`tipoInspectorId`) REFERENCES `TipoInspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraInspector` ADD CONSTRAINT `RelObraInspector_tipoProfesionId_fkey` FOREIGN KEY (`tipoProfesionId`) REFERENCES `TipoProfesion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_obraNumero_fkey` FOREIGN KEY (`obraNumero`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_representanteId_fkey` FOREIGN KEY (`representanteId`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RelObraRepresentante` ADD CONSTRAINT `RelObraRepresentante_tipoRepresentanteId_fkey` FOREIGN KEY (`tipoRepresentanteId`) REFERENCES `TipoRepresentante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_obraNumero_fkey` FOREIGN KEY (`obraNumero`) REFERENCES `Obra`(`numero`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FojaMedicion` ADD CONSTRAINT `FojaMedicion_inspectorId_fkey` FOREIGN KEY (`inspectorId`) REFERENCES `Inspector`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Certificacion` ADD CONSTRAINT `Certificacion_fojaMedicionId_fkey` FOREIGN KEY (`fojaMedicionId`) REFERENCES `FojaMedicion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PagoCertificacion` ADD CONSTRAINT `PagoCertificacion_certificacionId_fkey` FOREIGN KEY (`certificacionId`) REFERENCES `Certificacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;