import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio_clase_1';
  public edadUnoStr : string = "";
  public edadDosStr : string = "";
  public sumaStr : string = "";
  public promedioStr : string = "";
  public mensaje : string = "";

  public calcularOperaciones(event:any):void {
    let edadUno = parseInt(this.edadUnoStr);
    let edadDos = parseInt(this.edadDosStr);    
    let suma = edadUno + edadDos;
    let promedio;

    promedio = this.calcularPromedio(suma,2)

    if(isNaN(suma) || isNaN(promedio))
    {
      this.mensaje = "ERROR. Debe llenar los dos cuadros de texto";
    }
    else
    {
      if(edadUno < 1 || edadDos < 1)
      {
        this.mensaje = "ERROR. Las edades no pueden ser ni cero ni negativo";
      }
      else
      {
        this.promedioStr = promedio.toString() + " años";
        this.sumaStr = suma.toString() + " años";
      }
    }
  }

  public limpiarDatos(event:any):void {
    this.edadUnoStr = "";
    this.edadDosStr = "";
    this.sumaStr = "";
    this.promedioStr = "";
    this.mensaje = "";
  }

  private calcularPromedio(dividendo:number,divisor:number):number
  {
    return dividendo / divisor;
  }

  constructor(private router:Router) 
  {

  }

  public navigate(url:string)
  {
    this.router.navigateByUrl(url);
  }
}
