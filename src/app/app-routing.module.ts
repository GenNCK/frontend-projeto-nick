import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { TemaComponent } from './tema/tema.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component: CadastrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'paginaInicial', component: PaginaInicialComponent},
  {path: 'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
