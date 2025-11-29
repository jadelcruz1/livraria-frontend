import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livraria--standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../models/livro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deletar-livro',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './deletar-livro.html',
  styleUrls: ['./deletar-livro.css'],
})
export class DeletarLivro implements OnInit {

  livros: Livro[] = [];
  livroSelecionadoId!: number;
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
    if (!this.livroSelecionadoId) {
      alert('Selecione um livro para deletar.');
      return;
    }

    if (!confirm('Tem certeza que deseja deletar este livro?')) return;

    this.livroService.deletar(this.livroSelecionadoId).subscribe({
      next: () => {
        alert('Livro deletado com sucesso!');
        this.livroSelecionadoId = 0;
        this.carregarLivros(); // atualiza a lista
      },
      error: (err) => {
        alert('Erro ao deletar livro: ' + (err.message || err));
      }
    });
  }
 /* cancelar(): void {
  this.router.navigate(['/listar']);
}*/

}
