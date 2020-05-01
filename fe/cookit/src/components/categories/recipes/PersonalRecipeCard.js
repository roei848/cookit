import React, { useState } from "react";
import "../style.css";
import PersonalRecipeDialog from "./PersonalRecipeDialog";

const PersonalRecipeCard = ({ recipe }) => {
  const [dialogOpen, setDialog] = useState(false);

  const onClose = () => {
    setDialog(false);
  };

  const onOpen = () => {
    setDialog(true);
  };

  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <div className="content" onClick={onOpen}>
        <div className="header">{recipe.hebrew_name}</div>
        <img
          src={recipe.image}
          alt={recipe.hebrew_name}
          className="card-image"
        />
      </div>
      <PersonalRecipeDialog
        open={dialogOpen}
        onClose={onClose}
        recipe={recipe}
      />
    </div>
  );
};

export default PersonalRecipeCard;
