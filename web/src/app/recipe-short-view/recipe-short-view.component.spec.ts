import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShortViewComponent } from './recipe-short-view.component';

describe('RecipeShortViewComponent', () => {
  let component: RecipeShortViewComponent;
  let fixture: ComponentFixture<RecipeShortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
