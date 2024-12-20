/*
  Warnings:

  - A unique constraint covering the columns `[numeroExpediente]` on the table `Certificacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuit]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroExpediente]` on the table `FojaMedicion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuil]` on the table `Inspector` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroExpediente]` on the table `Obra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroResolucion]` on the table `Obra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroExpediente]` on the table `PagoCertificacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroResolucion]` on the table `PagoCertificacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `Pais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuit]` on the table `Representante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numeroMatricula]` on the table `Representante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoContratacionObra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoEstadoObra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoFinanciamientoObra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoInspector` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoModificacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoParalizacion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoProfesion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoProgramaObra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoRepresentante` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoTematicaObra` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `TipoTramite` will be added. If there are existing duplicate values, this will fail.
  - Made the column `direccionId` on table `departamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `subSecretariaId` on table `direccion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `provinciaId` on table `localidad` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paisId` on table `provincia` required. This step will fail if there are existing NULL values in that column.

*/
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
ALTER TABLE `certificacion` MODIFY `numeroExpediente` VARCHAR(191) NULL,
    MODIFY `fecha` DATE NULL;

-- AlterTable
ALTER TABLE `departamento` MODIFY `direccionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `direccion` MODIFY `subSecretariaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `empresa` MODIFY `cuit` INTEGER NULL,
    MODIFY `direccion` VARCHAR(191) NULL,
    MODIFY `numeroContacto` INTEGER NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `fojamedicion` MODIFY `numeroExpediente` VARCHAR(191) NULL,
    MODIFY `avance` DOUBLE NULL,
    MODIFY `fecha` DATE NULL;

-- AlterTable
ALTER TABLE `inspector` MODIFY `cuil` INTEGER NULL,
    MODIFY `nombre` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `localidad` MODIFY `provinciaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `pagocertificacion` MODIFY `numeroExpediente` VARCHAR(191) NULL,
    MODIFY `numeroResolucion` VARCHAR(191) NULL,
    MODIFY `monto` DECIMAL(65, 30) NULL,
    MODIFY `fecha` DATE NULL;

-- AlterTable
ALTER TABLE `provincia` MODIFY `paisId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `representante` MODIFY `cuit` INTEGER NULL,
    MODIFY `nombre` VARCHAR(191) NULL,
    MODIFY `direccion` VARCHAR(191) NULL,
    MODIFY `numeroMatricula` VARCHAR(191) NULL,
    MODIFY `vigencia` BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX `Certificacion_numeroExpediente_key` ON `Certificacion`(`numeroExpediente`);

-- CreateIndex
CREATE UNIQUE INDEX `Empresa_cuit_key` ON `Empresa`(`cuit`);

-- CreateIndex
CREATE UNIQUE INDEX `FojaMedicion_numeroExpediente_key` ON `FojaMedicion`(`numeroExpediente`);

-- CreateIndex
CREATE UNIQUE INDEX `Inspector_cuil_key` ON `Inspector`(`cuil`);

-- CreateIndex
CREATE UNIQUE INDEX `Obra_numeroExpediente_key` ON `Obra`(`numeroExpediente`);

-- CreateIndex
CREATE UNIQUE INDEX `Obra_numeroResolucion_key` ON `Obra`(`numeroResolucion`);

-- CreateIndex
CREATE UNIQUE INDEX `PagoCertificacion_numeroExpediente_key` ON `PagoCertificacion`(`numeroExpediente`);

-- CreateIndex
CREATE UNIQUE INDEX `PagoCertificacion_numeroResolucion_key` ON `PagoCertificacion`(`numeroResolucion`);

-- CreateIndex
CREATE UNIQUE INDEX `Pais_nombre_key` ON `Pais`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `Representante_cuit_key` ON `Representante`(`cuit`);

-- CreateIndex
CREATE UNIQUE INDEX `Representante_numeroMatricula_key` ON `Representante`(`numeroMatricula`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoContratacionObra_nombre_key` ON `TipoContratacionObra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoEstadoObra_nombre_key` ON `TipoEstadoObra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoFinanciamientoObra_nombre_key` ON `TipoFinanciamientoObra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoInspector_nombre_key` ON `TipoInspector`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoModificacion_nombre_key` ON `TipoModificacion`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoParalizacion_nombre_key` ON `TipoParalizacion`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoProfesion_nombre_key` ON `TipoProfesion`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoProgramaObra_nombre_key` ON `TipoProgramaObra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoRepresentante_nombre_key` ON `TipoRepresentante`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoTematicaObra_nombre_key` ON `TipoTematicaObra`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `TipoTramite_nombre_key` ON `TipoTramite`(`nombre`);

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_subSecretariaId_fkey` FOREIGN KEY (`subSecretariaId`) REFERENCES `SubSecretaria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Departamento` ADD CONSTRAINT `Departamento_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Provincia` ADD CONSTRAINT `Provincia_paisId_fkey` FOREIGN KEY (`paisId`) REFERENCES `Pais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Localidad` ADD CONSTRAINT `Localidad_provinciaId_fkey` FOREIGN KEY (`provinciaId`) REFERENCES `Provincia`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
