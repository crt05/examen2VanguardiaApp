import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Productos } from 'src/app/api/models'
import { ProductosControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  producto:Productos[]=[];
visible:boolean=false;


  constructor(
    private productoService:ProductosControllerService,
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

  mostar(data?:Productos):void{
    this.visible=true
  }

  guardar():void{

  }

}
