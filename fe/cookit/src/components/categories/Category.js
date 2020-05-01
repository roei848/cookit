import React from "react";
import SubCategoryCard from "./SubCategoryCard";
import { connect } from "react-redux";

const subCategoriesCards = (subCategories, category_name) => {
  const cards = subCategories.map((subCategory, index) => {
    return (
      <SubCategoryCard
        key={index}
        subCategory={subCategory}
        category_name={category_name}
      />
    );
  });

  return cards;
};

const Category = ({ category }) => {
  return (
    <div className="ui container">
      <h1>{category.hebrew_name}</h1>
      <div className="ui cards">
        {subCategoriesCards(category.sub_categories, category.name)}
      </div>
    </div>
  );
};

const mapToStateProps = (state, ownProps) => {
  return {
    category: state.categories.find(
      (category) => category.name === ownProps.match.params.category
    ),
  };
};

export default connect(mapToStateProps)(Category);
