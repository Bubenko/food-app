import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul> */}
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
