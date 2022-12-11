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

import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root',
})
export class DetalleFacturaProductosControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation detalleFacturaProductosControllerGetProductos
   */
  static readonly DetalleFacturaProductosControllerGetProductosPath = '/detalle-facturas/{id}/productos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductos$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Productos>>> {

    const rb = new RequestBuilder(this.rootUrl, DetalleFacturaProductosControllerService.DetalleFacturaProductosControllerGetProductosPath, 'get');
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
        return r as StrictHttpResponse<Array<Productos>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getProductos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductos(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Productos>> {

    return this.getProductos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Productos>>) => r.body as Array<Productos>)
    );
  }

}
