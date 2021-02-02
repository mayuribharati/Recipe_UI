import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-short-view',
  templateUrl: './recipe-short-view.component.html',
  styleUrls: ['./recipe-short-view.component.scss']
})
export class RecipeShortViewComponent implements OnInit {

  @Input()
  recipe: any;
  
  showReadMoreText = false;
 
  constructor() { }

  ngOnInit(): void {
  }

}
