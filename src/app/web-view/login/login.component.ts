import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';
  hide = true;

  senhaNgModel: string = "";
  emailNgModel: string = "";

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe()
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  limparCampos(){
    this.emailNgModel = "";
    this.senhaNgModel = "";
    this.errorMessage = '';
  }

  public abrirPaginaCadastro(){

  }
}
