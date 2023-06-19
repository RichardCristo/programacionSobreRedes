import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProvinciaComponent } from './get-provincia.component';

describe('GetProvinciaComponent', () => {
  let component: GetProvinciaComponent;
  let fixture: ComponentFixture<GetProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
