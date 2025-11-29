import { Routes } from '@angular/router';
import { ListarLivros } from './listar-livros/listar-livros';
import { AdicionarLivro } from './adicionar-livro/adicionar-livro';

export const routes: Routes = [
  { path: '', component: ListarLivros },
  { path: 'adicionarLivros', component: AdicionarLivro },
];

