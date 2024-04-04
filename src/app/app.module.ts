import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './web-view/login/login.component';
import { CadastroComponent } from './web-view/cadastro/cadastro.component';
import { MenuComponent } from './web-view/menu/menu.component';
import { ButtonBasicComponent } from './components/button-basic/button-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    MenuComponent,
    ButtonBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatIconModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
