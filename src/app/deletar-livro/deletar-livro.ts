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
  // livroSelecionadoId!: number;
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

  // deletar um por um
 /*deletarLivro(): void {
  if (!this.livroSelecionadoId) {
    alert('Selecione um livro para deletar.');
    return;
  }

  if (!confirm('Tem certeza que deseja deletar este livro?')) return;

  this.livroService.deletar(this.livroSelecionadoId).subscribe({
    next: () => {
      alert('Livro deletado com sucesso!');

     // Recarrega a lista do servidor imediatamente
      this.carregarLivros();

      // Reseta a seleção
      this.livroSelecionadoId = 0;
    },
    error: (err) => {
      alert('Erro ao deletar livro: ' + (err.message || err));
    }
  });
}*/

deletarLivro(): void {
  if (this.livrosSelecionados.length === 0) {
    alert('Selecione pelo menos um livro para deletar.');
    return;
  }

  if (!confirm(`Tem certeza que deseja deletar ${this.livrosSelecionados.length} livro(s)?`)) return;

  // Se quiser deletar **um por vez** no backend:
  // você pode usar Promise.all ou loop
  const deletos$ = this.livrosSelecionados.map(id => this.livroService.deletar(id));

  // Executa todos os deletes em paralelo
  forkJoin(deletos$).subscribe({
    next: () => {
      alert('Livro(s) deletado(s) com sucesso!');

      // Remove os livros deletados da lista local
    this.livros = this.livros.filter(
      livro => livro.id !== undefined && !this.livrosSelecionados.includes(livro.id)
    );

      // Reseta a seleção
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


 /* cancelar(): void {
  this.router.navigate(['/listar']);
}*/

}
