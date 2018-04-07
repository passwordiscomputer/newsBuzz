import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryHolderComponent } from './story-holder.component';

describe('StoryHolderComponent', () => {
  let component: StoryHolderComponent;
  let fixture: ComponentFixture<StoryHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
