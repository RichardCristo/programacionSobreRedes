import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchLluviaComponent } from './patch-lluvia.component';

describe('PatchLluviaComponent', () => {
  let component: PatchLluviaComponent;
  let fixture: ComponentFixture<PatchLluviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatchLluviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatchLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
