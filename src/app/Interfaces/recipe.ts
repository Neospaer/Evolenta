import { ShortUser } from "./User";

export interface Recipe {
    id: string,
    body: string,
    title: string,
    tags: string[],
    image?: string,
    timeCooking: number,
    author: {
        id: string,
        avatar: string,
        firstName: string,
        lastName: string,
        middleName: string
    },
    createdOn: Date,
    updatedOn: Date
}

export interface RecipeById {
  id: string,
  body: string,
  title: string,
  tags: string[],
  image: string,
  timeCooking: number,
  foodValue: FoodValue,
  cookingSteps: Step[],
  ingredients: Ingredient[],
  author: {
    id: string,
    avatar: string,
    firstName: string,
    lastName: string,
    middleName: string,
  },
  comments?: {
    id: string;
    postId: string;
    user: ShortUser;
    text: string;
    createdOn: Date;
    updatedOn: Date;
  }[];
  createdOn: Date;
  updatedOn: Date;
}

export interface CreateRecipe{
  body: string,
  title: string,
  tags: string[],
  image: string,
  timeCooking: number,
  foodValue: FoodValue,
  cookingStep: Step,
  ingredient: Ingredient
}

export interface FoodValue {
    calories: number;
    fats: number;
    carbohydrates: number;
    proteins: number;
  }
  
export interface Step {
  title: string;
  description: string;
}
  
export interface Ingredient {
  title: string;
  description: string;
} 
  
export interface AddRecipe {
  body: string;
  title: string;
  tags: string[];
  image: string;
  timeCooking: number;
  foodValue: FoodValue;
  cookingSteps: Step[];
  ingredients: Ingredient[];
}
export interface Commit{
  text: string
}
