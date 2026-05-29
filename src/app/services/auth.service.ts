import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CadastroUsuarioRequest } from '../models/cadastro-usuario.model';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private readonly http = inject(HttpClient);
 private readonly baseUrl = environment.apiUrl;
 cadastrar(usuario: CadastroUsuarioRequest): Observable<unknown> {
 return this.http.post<unknown>(this.baseUrl + 'auth/register', usuario);
 }
}
