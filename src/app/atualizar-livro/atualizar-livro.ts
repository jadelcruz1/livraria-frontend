import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../services/livraria--standalone';
import { Livro } from '../models/livro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-livro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atualizar-livro.html',
  styleUrl: './atualizar-livro.css',
})
export class AtualizarLivro implements OnInit{

  livros: Livro[] = [];
  livroSelecionado?: Livro;
  carregando = false;
  erro = '';
  sucesso = '';


  constructor( private livroService: LivroService,  ){
    
  }

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

  selecionarLivro(livro: Livro): void {
    // Faz uma cópia para não alterar o original antes de salvar
    this.livroSelecionado = { ...livro };
    this.sucesso = '';
    this.erro = '';
  }

   atualizarLivro(): void {
  if (!this.livroSelecionado || this.livroSelecionado.id === undefined) {
    this.erro = 'Nenhum livro selecionado ou ID inválido.';
    return;
  }

  this.livroService.atualizarLivro(this.livroSelecionado.id, this.livroSelecionado)
    .subscribe({
      next: (livroAtualizado) => {
        this.sucesso = 'Livro atualizado com sucesso!';
        this.erro = '';

        // Atualiza a lista local
        const index = this.livros.findIndex(l => l.id === livroAtualizado.id);
        if (index !== -1) this.livros[index] = livroAtualizado;

        this.livroSelecionado = undefined; // limpa seleção
      },
      error: (erro) => {
        this.erro = erro.message || 'Erro ao atualizar o livro';
        this.sucesso = '';
      }
    });
}

selecionarLivroCheckbox(checked: boolean, livro: Livro): void {
  if (checked) {
    // Seleciona o livro (faz uma cópia para edição)
    this.livroSelecionado = { ...livro };
  } else {
    // Deseleciona se desmarcar
    this.livroSelecionado = undefined;
  }
}

}
