import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarLivros } from './pesquisar-livros';

describe('PesquisarLivros', () => {
  let component: PesquisarLivros;
  let fixture: ComponentFixture<PesquisarLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisarLivros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
