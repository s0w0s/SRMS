import { Ingredient } from "../shared/ingredient.model";

const ingredients: Ingredient[] = [
  new Ingredient("Apples", 5),
  new Ingredient("Tomatoes", 10),
];
const initialState = {
  ingredients: ingredients,
};

export function shoppingListReducer(state, action) {}
