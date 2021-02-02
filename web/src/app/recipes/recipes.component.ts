import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class RecipesComponent implements OnInit {
  headerPath = [];
  isCategoryList = true;
  isGridView = true;
  list = [];
  activeRecipe: Recipe;

  constructor() {}

  ngOnInit(): void {
    this.setCategoryList();
  }

  onBoxClick(eventData, item) {
    if (!this.headerPath.length) {
      this.headerPath.push("All");
    }

    this.headerPath.push(item.name);

    if (this.isCategoryList) {
      this.setRecipeList();
      this.isCategoryList = false;
    } else {
      this.activeRecipe = item;
      this.isGridView = false;
    }

    console.log('header', this.headerPath);
  }

  onHeaderClick(index: number, header: any) {
    this.isGridView = true;

    if (index === 1) {
      this.setRecipeList();
      this.isCategoryList = false;
      this.headerPath.pop();
      return;
    }

    if (index === 0) {
      this.setCategoryList();
      this.isCategoryList = true;
      this.headerPath = [];
    }
  }

  setCategoryList() {
    this.list = [
      {
        id: 1,
        name: "Indian",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 2,
        name: "Italian",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 3,
        name: "Mexican",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 4,
        name: "Chinese",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 5,
        name: "Continental",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 6,
        name: "Thai",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
    ];
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
