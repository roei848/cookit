import React from "react";
import "../style.css";

const URLRecipeCard = ({ recipe }) => {
  return (
    <a
      href={recipe.url}
      className="card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="content">
        <div className="header">{recipe.hebrew_name}</div>
        <img
          src={recipe.image}
          alt={recipe.hebrew_name}
          className="card-image"
        />
      </div>
    </a>
  );
};

export default URLRecipeCard;
