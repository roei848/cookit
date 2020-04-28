import { FETCH_CATEGORIES } from "./types";
import history from "../history";
import _ from "lodash";
import mongo_api from "../api/mongo_api";

export const fetchCategories = () => async (dispatch) =>
  _fetchCategories(dispatch);
const _fetchCategories = _.memoize(async (dispatch) => {
  const response = await mongo_api.get("/categories");

  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
});
