import { Routes } from '@angular/router';
import { ListarLivros } from './listar-livros/listar-livros';
import { AdicionarLivro } from './adicionar-livro/adicionar-livro';
import { DeletarLivro } from './deletar-livro/deletar-livro';
import { AtualizarLivro } from './atualizar-livro/atualizar-livro';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'listarLivros', component: ListarLivros },
  { path: 'adicionarLivros', component: AdicionarLivro },
  { path: 'deletarLivros', component: DeletarLivro },
  { path: 'atualizarLivro', component: AtualizarLivro },
];

