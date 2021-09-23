import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { Error404Component } from './components/error404/error404.component';
import { ListarPostComponent } from './components/listar-post/listar-post.component';

const routes: Routes = [
{path: '', component: InicioComponent},
{path: 'listar-post', component: ListarPostComponent},
{path: 'crear-post', component: CrearArticuloComponent},
{path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
