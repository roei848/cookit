import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
  categories: categoriesReducer,
  recipes: recipesReducer,
});
