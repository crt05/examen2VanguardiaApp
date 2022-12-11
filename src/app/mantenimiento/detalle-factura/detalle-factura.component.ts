import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Productos } from 'src/app/api/models'
import { ProductosControllerService } from 'src/app/api/services';


@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class detalle-facturaComponent implements OnInit{

  producto:DetalleFactura[]=[];
visible:boolean=false;


  constructor(
    private detalleFacturaService:ProductosControllerService,
    private fb:FormBuilder
  ){}

  formProducto: FormGroup = this.fb.group({
    id:[],
    descripcion:[],
    valor:[]

  })

  ngOnInit(): void {
    this.productoService.find().subscribe(data=>this.producto=data)
  }

  eliminar(id:string):void{
    this.productoService.deleteById({id}).subscribe(()=>{
      this.producto=this.producto.filter(x=>x.id!==id);
    })

  }

  cancel ():void{

  }

  ocultar ():void{
    this.visible=false
  }

  mostar(data?:DetalleFactura:void{
    this.visible=true
  }

  guardar():void{

  }

}

