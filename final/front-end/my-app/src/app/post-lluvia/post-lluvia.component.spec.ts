import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLluviaComponent } from './post-lluvia.component';

describe('PostLluviaComponent', () => {
  let component: PostLluviaComponent;
  let fixture: ComponentFixture<PostLluviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostLluviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostLluviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
