import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)];
};

export function shoppingListReducer(state, action) {}
