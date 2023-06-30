import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosPersonalizadosComponent } from './metodos-personalizados.component';

describe('MetodosPersonalizadosComponent', () => {
  let component: MetodosPersonalizadosComponent;
  let fixture: ComponentFixture<MetodosPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodosPersonalizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodosPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
