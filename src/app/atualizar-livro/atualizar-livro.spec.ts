import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLivro } from './atualizar-livro';

describe('AtualizarLivro', () => {
  let component: AtualizarLivro;
  let fixture: ComponentFixture<AtualizarLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarLivro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
