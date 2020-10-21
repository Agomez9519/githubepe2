import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { GatoComponent } from './gato/gato.component';
import { InicioComponent } from './inicio/inicio.component';
import { PartnersComponent } from './partners/partners.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'partners', component:PartnersComponent},
  {path:'inicio', component:InicioComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'gato', component:GatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
