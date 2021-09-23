import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { Error404Component } from './components/error404/error404.component';


const appRoutes: Routes = [

{path: '', component: InicioComponent},
{path: 'crear-articulo', component: CrearArticuloComponent},
{path: '**', component: Error404Component}
];


export const appRoutingProviders: any[] = [];
