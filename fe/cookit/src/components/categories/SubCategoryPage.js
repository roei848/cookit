import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions";
import _ from "lodash";
import RecipeCardURL from "./recipes/RecipeCardURL";

class SubCategoryPage extends React.Component {
  componentDidMount() {
    const { category, subCategory } = this.props.match.params;
    this.props.fetchRecipes(category, subCategory);
  }

  renderRecipes() {
    if (_.isEmpty(this.props.recipes)) {
      return;
    } else {
      return this.props.recipes.map((recipe, index) => {
        switch (recipe.type) {
          case "url":
            return <RecipeCardURL recipe={recipe} key={index} />;
          case "pdf":
            //Need to create RecipeCardPdf
            return <></>;
          case "personal":
            //Need to create RecipeCardPersonal
            return <></>;
          default:
            return <></>;
        }
      });
    }
  }

  render() {
    return (
      <div className="ui container">
        <h1>{this.props.subCategoryName}</h1>
        <div className="ui cards">{this.renderRecipes()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //All this shit is only to get header in hebrew, what a pitty...
  const { category, subCategory } = ownProps.match.params;
  const categoryFromStore = state.categories.find(
    (categoryObj) => categoryObj.name === category
  );
  const subCategoryObject = categoryFromStore.sub_categories.find(
    (sub) => sub.name === subCategory
  );

  return {
    recipes: state.recipes,
    subCategoryName: subCategoryObject.hebrew_name,
  };
};

export default connect(mapStateToProps, { fetchRecipes })(SubCategoryPage);
