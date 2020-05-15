import React from "react";
import "../style.css";

import FavoriteButton from "./FavoriteButton";

const URLRecipeCard = (props) => {
  const { recipe } = props;

  return (
    <div className="card card-div">
      <div className="content">
        <a
          href={recipe.url}
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header card-header">{recipe.hebrew_name}</div>
          <img
            src={recipe.image}
            alt={recipe.hebrew_name}
            className="card-image"
          />
        </a>
      </div>
      <FavoriteButton recipe={recipe} />
    </div>
  );
};

export default URLRecipeCard;
