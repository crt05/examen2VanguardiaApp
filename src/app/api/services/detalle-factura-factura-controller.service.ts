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

import { Factura } from '../models/factura';
import { FacturaPartial } from '../models/factura-partial';
import { NewFacturaInDetalleFactura } from '../models/new-factura-in-detalle-factura';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class DetalleFacturaFacturaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation detalleFacturaFacturaControllerFind
   */
  static readonly DetalleFacturaFacturaControllerFindPath = '/detalle-facturas/{id}/facturas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: string;
    filter?: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Factura>>> {

    const rb = new RequestBuilder(this.rootUrl, DetalleFacturaFacturaControllerService.DetalleFacturaFacturaControllerFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Factura>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: string;
    filter?: any;
    context?: HttpContext
  }
): Observable<Array<Factura>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Factura>>) => r.body as Array<Factura>)
    );
  }

  /**
   * Path part for operation detalleFacturaFacturaControllerCreate
   */
  static readonly DetalleFacturaFacturaControllerCreatePath = '/detalle-facturas/{id}/facturas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: string;
    context?: HttpContext
    body?: NewFacturaInDetalleFactura
  }
): Observable<StrictHttpResponse<Factura>> {

    const rb = new RequestBuilder(this.rootUrl, DetalleFacturaFacturaControllerService.DetalleFacturaFacturaControllerCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Factura>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: string;
    context?: HttpContext
    body?: NewFacturaInDetalleFactura
  }
): Observable<Factura> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Factura>) => r.body as Factura)
    );
  }

  /**
   * Path part for operation detalleFacturaFacturaControllerDelete
   */
  static readonly DetalleFacturaFacturaControllerDeletePath = '/detalle-facturas/{id}/facturas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: string;
    where?: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, DetalleFacturaFacturaControllerService.DetalleFacturaFacturaControllerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: string;
    where?: any;
    context?: HttpContext
  }
): Observable<LoopbackCount> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation detalleFacturaFacturaControllerPatch
   */
  static readonly DetalleFacturaFacturaControllerPatchPath = '/detalle-facturas/{id}/facturas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: string;
    where?: any;
    context?: HttpContext
    body?: FacturaPartial
  }
): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, DetalleFacturaFacturaControllerService.DetalleFacturaFacturaControllerPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: string;
    where?: any;
    context?: HttpContext
    body?: FacturaPartial
  }
): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
