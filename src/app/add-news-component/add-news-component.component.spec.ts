import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsComponentComponent } from './add-news-component.component';

describe('AddNewsComponentComponent', () => {
  let component: AddNewsComponentComponent;
  let fixture: ComponentFixture<AddNewsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
