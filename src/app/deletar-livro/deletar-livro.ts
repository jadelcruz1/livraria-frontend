import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livraria--standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../models/livro.model';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-deletar-livro',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './deletar-livro.html',
  styleUrls: ['./deletar-livro.css'],
})
export class DeletarLivro implements OnInit {

  livros: Livro[] = [];
  livrosSelecionados: number[] = [];
  carregando = false;
  erro: string | null = null;

  constructor(
    private livroService: LivroService,    
  
  ) {}

  ngOnInit(): void {
     this.carregarLivros();
  }
 carregarLivros(): void {
    this.carregando = true;
    this.livroService.listarTodos().subscribe({
      next: (dados) => {
        this.livros = dados;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = err.message || 'Erro ao carregar livros';
        this.carregando = false;
      }
    });
  }

 
deletarLivro(): void {
  if (this.livrosSelecionados.length === 0) {
    alert('Selecione pelo menos um livro para deletar.');
    return;
  }

  if (!confirm(`Tem certeza que deseja deletar ${this.livrosSelecionados.length} livro(s)?`)) return;

   const deletos$ = this.livrosSelecionados.map(id => this.livroService.deletar(id));

  forkJoin(deletos$).subscribe({
    next: () => {
      alert('Livro(s) deletado(s) com sucesso!');      
    this.livros = this.livros.filter(
      livro => livro.id !== undefined && !this.livrosSelecionados.includes(livro.id)
    );
     
      this.livrosSelecionados = [];
    },
    error: (err: { message: any; }) => {
      alert('Erro ao deletar livro(s): ' + (err.message || err));
    }
  });
}

toggleSelecionado(id: number, event: any): void {
  if (event.target.checked) {
    this.livrosSelecionados.push(id);
  } else {
    this.livrosSelecionados = this.livrosSelecionados.filter(livroId => livroId !== id);
  }
}

}
