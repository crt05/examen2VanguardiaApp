/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DetalleFactura } from '../models/detalle-factura';

@Injectable({
  providedIn: 'root',
})
export class FacturaDetalleFacturaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation facturaDetalleFacturaControllerGetDetalleFactura
   */
  static readonly FacturaDetalleFacturaControllerGetDetalleFacturaPath = '/facturas/{id}/detalle-factura';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDetalleFactura()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDetalleFactura$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<DetalleFactura>>> {

    const rb = new RequestBuilder(this.rootUrl, FacturaDetalleFacturaControllerService.FacturaDetalleFacturaControllerGetDetalleFacturaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DetalleFactura>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDetalleFactura$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDetalleFactura(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<DetalleFactura>> {

    return this.getDetalleFactura$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DetalleFactura>>) => r.body as Array<DetalleFactura>)
    );
  }

}
