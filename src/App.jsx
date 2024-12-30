import { useState } from 'react';
import ChefNavbar from './components/ChefNavbar';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';
import Recipe from './components/Recipe';
import { Analytics } from '@vercel/analytics/react';
import { getRecipeFromMistral } from './ai.js';
import './App.css';

console.log('getRecipeFromMistral loaded');

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const removeIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ing => ing !== ingredientToRemove));
  };

  const canGetRecipe = ingredients.length >= 4;

  async function getRecipe() {
    try {
        console.log("Fetching recipe...");
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    } catch (err) {
        console.error("Error fetching recipe:", err);
        setRecipe("Failed to fetch recipe. Please try again later.");
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
            <button className="recipe-btn" onClick={()=>getRecipe()}>Get Recipes</button>
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