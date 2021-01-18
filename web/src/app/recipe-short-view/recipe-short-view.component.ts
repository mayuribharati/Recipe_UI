import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-short-view',
  templateUrl: './recipe-short-view.component.html',
  styleUrls: ['./recipe-short-view.component.scss']
})
export class RecipeShortViewComponent implements OnInit {

  showReadMoreText = false;
 
  constructor() { }

  ngOnInit(): void {
  }

}
