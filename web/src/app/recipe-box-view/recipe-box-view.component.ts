import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-box-view',
  templateUrl: './recipe-box-view.component.html',
  styleUrls: ['./recipe-box-view.component.scss']
})
export class RecipeBoxViewComponent implements OnInit {

  @Input()
  imageUrl = "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg";

  @Input()
  title = "Indian";

  @Input()
  id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
