import { Component, OnInit } from '@angular/core';
import { DeportesService } from './../deportes.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  deportes:any[]=[];

  constructor(private _deporte:DeportesService) {
    this.deportes=_deporte.obtenerDatos();
   }

  ngOnInit(): void {
  }

}
