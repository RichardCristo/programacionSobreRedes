import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProvinciaComponent } from './delete-provincia.component';

describe('DeleteProvinciaComponent', () => {
  let component: DeleteProvinciaComponent;
  let fixture: ComponentFixture<DeleteProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
