import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodo1Component } from './metodo1.component';

describe('Metodo1Component', () => {
  let component: Metodo1Component;
  let fixture: ComponentFixture<Metodo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Metodo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
