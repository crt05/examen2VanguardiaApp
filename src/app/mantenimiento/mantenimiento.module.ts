import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { ProductoComponent } from './producto/producto.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { FacturaComponent } from './factura/factura.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    ProductoComponent,
    DetalleFacturaComponent,
    FacturaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzSelectModule
  ]
})
export class MantenimientoModule { }
