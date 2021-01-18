import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBoxViewComponent } from './recipe-box-view.component';

describe('RecipeBoxViewComponent', () => {
  let component: RecipeBoxViewComponent;
  let fixture: ComponentFixture<RecipeBoxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBoxViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeBoxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
