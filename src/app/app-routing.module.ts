import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component: CadastrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'paginaInicial', component: PaginaInicialComponent},
  {path: 'tema', component: TemaComponent},
  {path:'sobreNos',component: SobreNosComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
