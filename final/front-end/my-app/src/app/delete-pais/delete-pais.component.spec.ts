import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePaisComponent } from './delete-pais.component';

describe('DeletePaisComponent', () => {
  let component: DeletePaisComponent;
  let fixture: ComponentFixture<DeletePaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
