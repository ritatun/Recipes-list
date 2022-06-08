import React from "react";
import Recipe from "./Recipe";
import AddNewResipe from "./AddNewRecipe";
import { RECIPES } from "./Recipes-mock";
import "./App.css";

function App() {
  const [recipes, setRescipes] = React.useState(RECIPES);

  function handleAddIng(data, id) {
    if (data !== "") {
      let newRecipe = recipes.map((recipe) => {
        if (recipe.id === id) {
          recipe.ingredients.push(data);
          return recipe;
        }
        return recipe;
      });
      setRescipes(newRecipe);
    } else {
      return;
    }
  }

  function handleDelIng(id, ingredient) {
    let newRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        let newRecipeItem = recipe.ingredients.filter(
          (item) => item !== ingredient
        );
        recipe.ingredients = newRecipeItem;
        return recipe;
      }
      return recipe;
    });
    setRescipes(newRecipe);
  }

  function createRecipe(value) {
    const ID = recipes.length + 1;
    let newRecipeItem = {
      name: value,
      id: ID,
      ingredients: [],
    };
    let newRecipe = recipes.concat(newRecipeItem);
    setRescipes(newRecipe);
  }

  function addDescription(data, id) {
    let newRecipe = recipes.map((recipe) => {
      if (recipe.id === id) {
        recipe.description = data.target.value;
        return recipe;
      }
      return recipe;
    });
    setRescipes(newRecipe);
  }

  return (
    <div>
      <h2 className="title">MY RECIPES</h2>
      <hr />
      {recipes.map((item) => {
        return (
          <Recipe
            name={item.name}
            ingredients={item.ingredients}
            description={item.description}
            key={item.id}
            id={item.id}
            handleAddIng={handleAddIng}
            handleDelIng={handleDelIng}
            addDescription={addDescription}
          />
        );
      })}
      <AddNewResipe createRecipe={createRecipe} />
    </div>
  );
}

export default App;
