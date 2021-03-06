import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TechComponent } from './tech/tech.component';
import { TemaComponent } from './tema/tema.component';



const routes: Routes = [

  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path:'entrar',component: EntrarComponent},
  {path:'cadastrar',component: CadastrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'paginaInicial', component: PaginaInicialComponent},
  {path: 'tema', component: TemaComponent},
  {path:'sobreNos',component: SobreNosComponent},
  {path: 'tech', component: TechComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
