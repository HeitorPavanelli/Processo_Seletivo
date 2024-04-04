import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './web-view/menu/menu.component';
import { LoginComponent } from './web-view/login/login.component';
import { CadastroComponent } from './web-view/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: MenuComponent }, // Rota padrão para o componente Home
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
