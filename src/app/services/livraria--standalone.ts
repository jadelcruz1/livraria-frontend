// src/app/services/livro.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Livro } from '../models/livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = 'http://localhost:8080/api/livros';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl).pipe(
      catchError(this.tratarErro)
    );
  }

  buscarPorId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.tratarErro)
    );
  }

  listarPorAutor(autor: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}/autor/${autor}`).pipe(
      catchError(this.tratarErro)
    );
  }

  adicionarLivros(livros: Livro[]): Observable<Livro[]> {
    return this.http.post<Livro[]>(this.apiUrl, livros).pipe(
      catchError(this.tratarErro)
    );
  }

  atualizarLivro(id: number, livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${id}`, livro).pipe(
      catchError(this.tratarErro)
    );
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.tratarErro)
    );
  }

  deletarEmLote(ids: number[]): Observable<void> {
    return this.http.request<void>('delete', `${this.apiUrl}/lote`, { body: ids }).pipe(
      catchError(this.tratarErro)
    );
  }

  deletarTodos(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/todos`).pipe(
      catchError(this.tratarErro)
    );
  }

  private tratarErro(error: HttpErrorResponse) {
    console.error('Erro na API:', error);
    return throwError(() => new Error('Erro ao consumir API'));
  }
}
