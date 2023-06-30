import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLluviaComponent } from './delete-lluvia.component';

describe('DeleteLluviaComponent', () => {
  let component: DeleteLluviaComponent;
  let fixture: ComponentFixture<DeleteLluviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLluviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
