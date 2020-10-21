import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarralateralComponent } from './barralateral/barralateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PartnersComponent } from './partners/partners.component';
import { GatoComponent } from './gato/gato.component';
import { ContactoComponent } from './contacto/contacto.component';

//servicio

import { DeportesService } from './deportes.service';

@NgModule({
  declarations: [
    AppComponent,
    BarralateralComponent,
    InicioComponent,
    PortafolioComponent,
    ServiciosComponent,
    PartnersComponent,
    GatoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [DeportesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
