import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPaisComponent } from './post-pais.component';

describe('PostPaisComponent', () => {
  let component: PostPaisComponent;
  let fixture: ComponentFixture<PostPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
