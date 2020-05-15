import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SubCategoryCard = ({ subCategory, category_name }) => {
  return (
    <Link
      to={`/${category_name}/${subCategory.name}`}
      className="card card-div"
    >
      <div className="content">
        <div className="header">{subCategory.hebrew_name}</div>
        <img
          src={subCategory.image}
          alt={subCategory.hebrew_name}
          className="card-image"
        />
      </div>
    </Link>
  );
};

export default SubCategoryCard;
