import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { Page404Component } from './page404/page404.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'page404', component: Page404Component },
  { path: 'inicio', component: InicioComponent },  
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  //{ path: '**', component: Page404Component }
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/page404', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    PruebasComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    Page404Component,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
