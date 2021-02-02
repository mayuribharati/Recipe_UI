import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../recipe";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.scss"],
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipe?: Recipe;

  objectKeys = [
    {
      key: 'name',
      value: 'Name',
    },
    {
      key: 'owner',
      value: 'Owner',
    },
    {
      key: 'timeRequired',
      value: 'Time Required',
    },
    {
      key: 'ingredients',
      value: 'Ingredients',
    },
    {
      key: 'instructions',
      value: 'Instructions',
    },
    {
      key: 'tags',
      values: 'Tags'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.recipe);
    if (!this.recipe) {
      this.recipe = {
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
      };
    }
  }
}
