import { FETCH_CATEGORIES, FETCH_RECIPES } from "./types";
import _ from "lodash";
import mongo_api from "../api/mongo_api";

export const fetchCategories = () => async (dispatch) =>
  _fetchCategories(dispatch);
const _fetchCategories = _.memoize(async (dispatch) => {
  const response = await mongo_api.get("/categories");

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
});

export const fetchRecipes = (category, sub_category) => async (dispatch) => {
  const response = await mongo_api.get(`/recipes/${category}/${sub_category}`);

  dispatch({ type: FETCH_RECIPES, payload: response.data });
};
