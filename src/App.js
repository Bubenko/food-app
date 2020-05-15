import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import "./App.css";

const App = () => {
  const APP_ID = "bcc73f43";
  const APP_KEY = "17472582386e92a0ac47e63437160f76";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    console.log("Fetching");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="headingText">Your favorite recipe book!</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="What do you want to cook?"
        />
        <br />
        <div className="button-container">
          <button className="search-button button" type="submit">
            Search
          </button>
        </div>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <p className="footer">by Vladimir Bubenko</p>
    </div>
  );
};

export default App;
