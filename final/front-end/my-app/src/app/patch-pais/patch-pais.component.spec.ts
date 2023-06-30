import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchPaisComponent } from './patch-pais.component';

describe('PatchPaisComponent', () => {
  let component: PatchPaisComponent;
  let fixture: ComponentFixture<PatchPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
