import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLluviaComponent } from './get-lluvia.component';

describe('GetLluviaComponent', () => {
  let component: GetLluviaComponent;
  let fixture: ComponentFixture<GetLluviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLluviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
