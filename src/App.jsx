import { useState } from 'react';
import ChefNavbar from './components/ChefNavbar';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';
import Recipe from './components/Recipe';
import { Analytics } from '@vercel/analytics/react';
import { getRecipeFromMistral } from './ai.js';
import './App.css';
import Loader from './components/loader.jsx';

console.log('getRecipeFromMistral loaded');

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [status, setStatus] = useState("Generate Recipe");

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    setStatus("Generate Recipe");
  };

  const removeIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
  };

  const canGetRecipe = ingredients.length >= 4;

  async function getRecipe() {
    try {
      setStatus("Loading...");
      console.log("Fetching recipe...");
      const recipeMarkdown = await getRecipeFromMistral(ingredients);
      setRecipe(recipeMarkdown);
      setStatus("Loaded");
    } catch (err) {
      console.error("Error fetching recipe:", err);
      setRecipe("Failed to fetch recipe. Please try again later.");
      setStatus("Generate Recipe");
    }
  }

  return (
    <div className="app">
      <header>
        <ChefNavbar />
        <p>Add at least 4 ingredients to get recipe suggestions</p>
      </header>

      <main>
        <IngredientForm 
          onAddIngredient={addIngredient}
          ingredients={ingredients}
        />
        <IngredientList 
          ingredients={ingredients}
          onRemoveIngredient={removeIngredient}
        />
        {canGetRecipe ? (
          <div className="recipe-ready">
            <h3>🎉 You can now get recipe suggestions!</h3>
            <button className="recipe-btn" onClick={getRecipe}>
              {status === "Loading..." ? (
                <Loader />
              ) : (
                <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="loaded-icon">
                  <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                </svg>
              )}
              <span className="text">{status}</span>
            </button>
          </div>
        ) : (
          <div className="recipe-status">
            <p>Add {4 - ingredients.length} more ingredient{4 - ingredients.length !== 1 ? 's' : ''} to get recipes</p>
          </div>
        )}

        {recipe && <Recipe recipe={recipe} />}
      </main>
      <Analytics />
    </div>
  );
}