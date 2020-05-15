import React from "react";
import "./Recipes.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipeContainer">
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
      {/* <p>{calories}</p> */}

      <img src={image} alt="recipe image" />
    </div>
  );
};

export default Recipe;
