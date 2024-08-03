export interface Recipe {
    id: string,
    body: string,
    title: string,
    tags: string[],
    image: string,
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
