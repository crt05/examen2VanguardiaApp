/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Factura, 'id'>, 'detalleFacturaId'>, schemaOptions: { title: 'NewFacturaInDetalleFactura', exclude: [ 'id' ], optional: [ 'detalleFacturaId' ] })
 */
export interface NewFacturaInDetalleFactura {
  cliente: string;
  correlativo: number;
  detalleFacturaId?: string;
  direccion?: string;
  email?: string;
  fecha: string;
  telefono?: string;
}
