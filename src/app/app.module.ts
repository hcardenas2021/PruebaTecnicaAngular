import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { Error404Component } from './components/error404/error404.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { ListarPostComponent } from './components/listar-post/listar-post.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CrearArticuloComponent,
    Error404Component,
    CabeceraComponent,
    ListarPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
