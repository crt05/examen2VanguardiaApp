/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<DetalleFactura, 'id'>, 'productosId'>, schemaOptions: { title: 'NewDetalleFacturaInProductos', exclude: [ 'id' ], optional: [ 'productosId' ] })
 */
export interface NewDetalleFacturaInProductos {
  cantidad: number;
  facturaId: string;
  productoId: string;
  productosId?: string;
}
