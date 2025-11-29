import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro.model';
import { LivroService } from '../services/livraria--standalone';
import { Router } from 'express';

@Component({
  selector: 'app-listar-livros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-livros.html',
  styleUrl: './listar-livros.css',
})
export class ListarLivros implements OnInit {

  livros: Livro[] = [];
  carregando: boolean = false;
  erro: string = '';

  // inicia o objeto .js
   constructor(
    private livroService: LivroService,  
  ) { }

   // inicia o metodo ou o componente angular
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



}
