/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<DetalleFactura, 'id'>, schemaOptions: { title: 'NewDetalleFactura', exclude: [ 'id' ] })
 */
export interface NewDetalleFactura {
  cantidad: number;
  facturaId: string;
  productoId: string;
  productosId?: string;
}
