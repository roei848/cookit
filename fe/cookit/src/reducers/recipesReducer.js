import { FETCH_RECIPES, FETCH_FAVORED_RECIPES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return action.payload;
    case FETCH_FAVORED_RECIPES:
      return action.payload;
    default:
      return state;
  }
};
