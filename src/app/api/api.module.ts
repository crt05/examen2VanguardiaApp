/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { DetalleFacturaControllerService } from './services/detalle-factura-controller.service';
import { DetalleFacturaFacturaControllerService } from './services/detalle-factura-factura-controller.service';
import { DetalleFacturaProductosControllerService } from './services/detalle-factura-productos-controller.service';
import { FacturaControllerService } from './services/factura-controller.service';
import { FacturaDetalleFacturaControllerService } from './services/factura-detalle-factura-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { ProductosControllerService } from './services/productos-controller.service';
import { ProductosDetalleFacturaControllerService } from './services/productos-detalle-factura-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    DetalleFacturaControllerService,
    DetalleFacturaFacturaControllerService,
    DetalleFacturaProductosControllerService,
    FacturaControllerService,
    FacturaDetalleFacturaControllerService,
    PingControllerService,
    ProductosControllerService,
    ProductosDetalleFacturaControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
