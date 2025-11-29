import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livraria--standalone';
import { Livro } from '../models/livro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adicionar-livro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-livro.html',
  styleUrl: './adicionar-livro.css',
})
export class AdicionarLivro implements OnInit {

   novoLivro: Livro = { titulo: '', autor: '', preco: 0 };
   carregando: boolean = false;
   erro: string = '';
   sucesso: string = '';

   constructor(
    private livroService: LivroService,
    
  ) { }

   ngOnInit(): void {
    this.adicionarLivros();
    }

 /* adicionarLivros(): void{
    this.livroService.adicionarLivros([this.novoLivro]).subscribe({
      next:(dados) =>{
        this.sucesso = "Livro adicionado com sucesso";
        this.carregando = false;
      },
      error: (err) => {
        this.erro = err.message || "Erro ao adicionar livro";
        this.carregando = false;
      }
    })*/

      adicionarLivros(): void {
  this.carregando = true;
  this.livroService.adicionarLivros([this.novoLivro]).subscribe({
    next: (dados) => {
      this.sucesso = "Livro adicionado com sucesso!";
      this.erro = '';
      this.carregando = false;
      // Limpa a notificação depois de 3 segundos
      setTimeout(() => this.sucesso = '', 3000);
      // Reseta o formulário
      this.novoLivro = { titulo: '', autor: '', preco: 0 };
    },
    error: (err) => {
      this.erro = err.message || "Erro ao adicionar livro";
      this.sucesso = '';
      this.carregando = false;
      setTimeout(() => this.erro = '', 3000);
    }
  });
}
 

}
