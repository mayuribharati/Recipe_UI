import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.scss"],
})
export class RecipesComponent implements OnInit {
  headerPath = [];
  isCategoryList = true;
  list = [];

  constructor() {}

  ngOnInit(): void {
    this.list = [
      {
        id: 1,
        lable: "Indian",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 2,
        lable: "Italian",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 3,
        lable: "Mexican",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 4,
        lable: "Chinese",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 5,
        lable: "Continental",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      },
      {
        id: 6,
        lable: "Thai",
        imageUrl:
          "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
      }
    ];
  }

  onBoxClick(eventData, item) {
    if (!this.headerPath.length) {
      this.headerPath.push("All");
    }

    this.headerPath.push(item.lable);

    if (this.isCategoryList) {
      this.list = [
        {
          id: 1,
          lable: "Kanda Poha",
          imageUrl:
            "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
        },
        {
          id: 2,
          lable: "Masala Dosa",
          imageUrl:
            "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
        },
        {
          id: 3,
          lable: "Paratha",
          imageUrl:
            "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
        },
        {
          id: 4,
          lable: "Idli Sambar",
          imageUrl:
            "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
        },
        {
          id: 5,
          lable: "Rasgulla",
          imageUrl:
            "https://thumbs.dreamstime.com/b/assorted-indian-food-different-bowls-dark-wooden-background-top-view-dishes-appetizers-cuisine-chicken-curry-rice-129630877.jpg",
        }
      ]
    }
  }
}
