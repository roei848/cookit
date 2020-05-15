import React, { useState } from "react";
import "../style.css";
import PersonalRecipeDialog from "./PersonalRecipeDialog";
import FavoriteButton from "./FavoriteButton";

const PersonalRecipeCard = ({ recipe }) => {
  const [dialogOpen, setDialog] = useState(false);

  const onClose = () => {
    setDialog(false);
  };

  const onOpen = () => {
    setDialog(true);
  };

  return (
    <div className="card card-div" style={{ cursor: "pointer" }}>
      <div className="content" onClick={onOpen}>
        <div className="card-header">{recipe.hebrew_name}</div>
        <img
          src={recipe.image}
          alt={recipe.hebrew_name}
          className="card-image"
        />
      </div>
      <FavoriteButton recipe={recipe} />
      <PersonalRecipeDialog
        open={dialogOpen}
        onClose={onClose}
        recipe={recipe}
      />
    </div>
  );
};

export default PersonalRecipeCard;
