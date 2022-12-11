/* tslint:disable */
/* eslint-disable */
import { FacturaWithRelations } from './factura-with-relations';
import { ProductosWithRelations } from './productos-with-relations';

/**
 * (tsType: DetalleFacturaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetalleFacturaWithRelations {
  cantidad: number;
  facturaId: string;
  facturas?: Array<FacturaWithRelations>;
  id?: string;
  productoId: string;
  productos?: ProductosWithRelations;
  productosId?: string;
}
