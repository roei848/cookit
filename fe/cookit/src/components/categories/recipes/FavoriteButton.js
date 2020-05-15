import React, { useState } from "react";
import { connect } from "react-redux";
import { updateFavorite } from "../../../actions";

const FavoriteButton = (props) => {
  const { recipe } = props;

  const [favoriteBool, setFavorite] = useState(recipe.favorite);

  const renderFavorite = () => {
    if (favoriteBool === true) {
      return "הורד מהמועדפים";
    } else {
      return "הוסף למועדפים";
    }
  };

  const onClickFavorite = () => {
    const newRecipe = recipe;
    const favorite_status = recipe.favorite ? false : true;
    setFavorite(favorite_status);

    newRecipe["favorite"] = favorite_status;

    props.updateFavorite(newRecipe.name, newRecipe);
  };

  return (
    <div className="extra content">
      <span className="right floated star">
        <i className="star icon" onClick={onClickFavorite}></i>
        {renderFavorite()}
      </span>
    </div>
  );
};

export default connect(null, { updateFavorite })(FavoriteButton);
