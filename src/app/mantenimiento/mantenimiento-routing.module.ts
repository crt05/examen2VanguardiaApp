import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { FacturaComponent } from './factura/factura.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {path:'',
    children:[
      {path:'producto',component:ProductoComponent},
      {path:'detalle-factura',component:DetalleFacturaComponent},
      {path:'factura',component:FacturaComponent}
    ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
