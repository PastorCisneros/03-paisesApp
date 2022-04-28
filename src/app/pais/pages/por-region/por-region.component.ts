import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `

  button{
    margin-left:5px;
  }
  `
  ]
})


export class PorRegionComponent  {


  regiones: string[] =['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';
  hayError:boolean= false;
  paises:Country[]=[];

  constructor(private regionService:PaisService) { }

  activarRegion(region:string){

    if(region===this.regionActiva){return;}
    this.regionActiva=region;
    this.hayError = false;
    this.regionActiva=region;
    console.log(this.regionActiva);
    this.regionService.buscarRegion(this.regionActiva)
    .subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises=paises
      },error: (err) => {
        this.hayError = true;
      }
    })
  }



}
