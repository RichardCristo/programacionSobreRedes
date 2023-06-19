import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchProvinciaComponent } from './patch-provincia.component';

describe('PatchProvinciaComponent', () => {
  let component: PatchProvinciaComponent;
  let fixture: ComponentFixture<PatchProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
