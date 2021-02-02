import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {

  list: Recipe[] = [];
  showRecipeDetails = false;
  activeRecipe: Recipe;
  headerPath = [];
  showForm = false;

  constructor() { }

  ngOnInit(): void {
    this.setRecipeList();
  }

  onHeaderClick(eventData: MouseEvent, item: Recipe) {
    this.headerPath = [];
    this.showRecipeDetails = false;
    this.setRecipeList();
  }

  onBoxClick(eventData: MouseEvent, item: Recipe) {
    console.log('selected recipe', item);
    this.showRecipeDetails = true;
    this.headerPath.push('My Recipes');
    this.headerPath.push(item.name);
    this.activeRecipe = item;
  }

  deleteRecipe(eventData, item) {
    console.log('deleting recipe', item);
    this.list = this.list.filter(lItem => lItem.id !== item.id);
    eventData.stopPropagation();
  }

  showRecipeForm() {
    this.showForm !== this.showForm;
  }

  setRecipeList() {
    this.list = [
      {
          id: 1,
          name: "Strawberries Romanov",
          timeRequired: "30 mins",
          imageUrl: "https://d2lswn7b0fl4u2.cloudfront.net/photos/cilek-romanoff.jpg",
          ingredients: [
            "2 tbsp powdered sugar\r",
            "1/2 pt heavy whipping cream\r",
            "1 lb strawberries, (2 pints)\r",
            "4 tbsp brandy",
          ],
          instructions:
            "Wash strawberries and cut the tops off. Let strawberries drain.  Mix together heavy whipping cream, powdered sugar, and the brandy. Beat with a mixer till this becomes thick.  Place strawberries into glasses and spoon over the sauce.\r\n",
          owner: 'Mayuri Bharati',
      },
      {
        id: 2,
        name: "Masala Dosa",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 3,
        name: "Paratha",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 4,
        name: "Idli Sambar",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 5,
        name: "Rasgulla",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
    ];
  }
}
