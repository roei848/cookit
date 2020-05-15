import React from "react";
import { connect } from "react-redux";
import { fetchFavoredRecipes } from "../../actions";
import _ from "lodash";
import URLRecipeCard from "../categories/recipes/URLRecipeCard";
import PersonalRecipeCard from "../categories/recipes/PersonalRecipeCard";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchFavoredRecipes();
  }

  renderRecipes() {
    if (_.isEmpty(this.props.recipes)) {
      return;
    } else {
      return this.props.recipes.map((recipe, index) => {
        switch (recipe.type) {
          case "url":
            return <URLRecipeCard recipe={recipe} key={index} />;
          case "pdf":
            //Need to create RecipeCardPdf
            return <></>;
          case "personal":
            //Need to create RecipeCardPersonal
            return <PersonalRecipeCard recipe={recipe} key={index} />;
          default:
            return <React.Fragment key={index}></React.Fragment>;
        }
      });
    }
  }

  render() {
    return (
      <div className="ui container">
        <h1>המתכונים האהובים</h1>
        <div className="ui cards">{this.renderRecipes()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { fetchFavoredRecipes })(Home);
