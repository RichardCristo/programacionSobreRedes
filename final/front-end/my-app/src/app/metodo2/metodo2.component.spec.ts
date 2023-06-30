import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo2Component } from './metodo2.component';

describe('Metodo2Component', () => {
  let component: Metodo2Component;
  let fixture: ComponentFixture<Metodo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Metodo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
