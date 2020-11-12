import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public doble: number;
  public numero: number;

  //CREAMOS UN METODO PARA LA REDIRECCION, A NOSTROS MISMO
  redirect(num) {
    this._router.navigate(["/numerodoble", num]);
  }

  //RECUPERAREMOS LO DOS OBJETOS
  //RUTAS: ActivatedRoute y Router
  //INYECCION SE DECLARAN COMO Private
  constructor(private _activeRote: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    //DEBEMOS SUBSCRIBIRNOS AL PARAMETROS, PARA PODER RECIBIRLO
    //DENTRO DE params VENDRAN LOS PARAMENTOS POR SU NOMBRE :name
    this._activeRote.params.subscribe((params: Params) => {
      //HEMOS CREADO RUTAS SIN NUMERO
      //COMPROBAMOS QUE TENEMOS PARAMETRO
      if (params.numero != null) {
        //PARAMETROS SON STRING
        this.numero = parseInt(params.numero);
        this.doble = this.numero * 2;
      } else {
        console.log("No hay parametros");

      }
    });
  }

}
