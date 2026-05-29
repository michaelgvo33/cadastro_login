import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  mensagemSucesso = '';
  mensagemErro = '';
  carregando = false;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      repetirSenha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.cadastroForm.value);
  }

  limparFormulario(): void {
    this.cadastroForm.reset();
  }
}