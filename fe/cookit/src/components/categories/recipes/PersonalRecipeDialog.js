import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./style.css";

const PersonalRecipeDialog = (props) => {
  const renderRecipeIngredients = (ingredients) => {
    const items = ingredients.map((ingredientObject, index) => {
      return (
        <li key={index}>
          {`${ingredientObject.quantity} ${ingredientObject.ingredient}`}
        </li>
      );
    });

    return (
      <div>
        <h4>מצרכים</h4>
        <ul className="ingredients-list">{items}</ul>
      </div>
    );
  };

  const renderRecipeDirections = (directions) => {
    const items = directions.map((direction, index) => {
      return (
        <li key={index} className="direction-item">
          {direction.direction}
        </li>
      );
    });

    return (
      <div>
        <h4>שלבי הכנה</h4>
        <ol className="directions-list">{items}</ol>
      </div>
    );
  };

  const renderRecipeTimer = (estimatedTime) => {
    return (
      <div className="timer">
        <i className="hourglass start icon"></i>
        <span style={{ direction: "ltr" }}>{estimatedTime}</span>
      </div>
    );
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
      >
        <div className="dialog">
          <AppBar position="static" className="app-bar">
            <Toolbar className="tool-bar">
              <IconButton
                color="inherit"
                onClick={props.onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography className="dialog-title">
                {props.recipe.hebrew_name}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent>
            {renderRecipeIngredients(props.recipe.recipe.ingredients)}
            {renderRecipeDirections(props.recipe.recipe.directions)}
            {renderRecipeTimer(props.recipe.recipe.estimated_time)}
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default PersonalRecipeDialog;
