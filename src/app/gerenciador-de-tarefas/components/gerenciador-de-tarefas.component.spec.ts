import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorDeTarefasComponent } from './gerenciador-de-tarefas.component';

describe('GerenciadorDeTarefasComponent', () => {
  let component: GerenciadorDeTarefasComponent;
  let fixture: ComponentFixture<GerenciadorDeTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciadorDeTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
