/* tslint:disable */
/* eslint-disable */
import { DetalleFacturaWithRelations } from './detalle-factura-with-relations';

/**
 * (tsType: FacturaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface FacturaWithRelations {
  cliente: string;
  correlativo: number;
  detalleFactura?: DetalleFacturaWithRelations;
  detalleFacturaId?: string;
  direccion?: string;
  email?: string;
  fecha: string;
  id?: string;
  telefono?: string;
}
