import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-mutltiplicar',
  templateUrl: './tablamutltiplicar.component.html',
  styleUrls: ['./tablamutltiplicar.component.css']
})
export class TablamutltiplicarComponent implements OnInit {

  public resultado: Array<number>;
  public num: number;

  // @ViewChild("cajanumero") cajanumero: ElementRef;

  multiplicar() {
    this.resultado = [];
    // this.num = parseInt(this.cajanumero.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      var multi = this.num * i;
      this.resultado.push(multi);
    }
    console.log(this.resultado);
  }
  constructor() {
    this.resultado = [];
  }

  ngOnInit(): void {
  }

}
