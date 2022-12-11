/* tslint:disable */
/* eslint-disable */
import { DetalleFacturaWithRelations } from './detalle-factura-with-relations';

/**
 * (tsType: ProductosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ProductosWithRelations {
  descripcion: string;
  detalleFacturas?: Array<DetalleFacturaWithRelations>;
  id?: string;
  valor: number;
}
