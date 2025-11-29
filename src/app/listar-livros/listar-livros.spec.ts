import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLivros } from './listar-livros';

describe('ListarLivros', () => {
  let component: ListarLivros;
  let fixture: ComponentFixture<ListarLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarLivros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLivros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
