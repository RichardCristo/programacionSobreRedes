import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaisComponent } from './get-pais.component';

describe('GetPaisComponent', () => {
  let component: GetPaisComponent;
  let fixture: ComponentFixture<GetPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
