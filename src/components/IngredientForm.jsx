import React from 'react';

export default function IngredientForm({onAddIngredient, ingredients}) {
    const [ingredient, setIngredient] = React.useState('');
    const [error, setError] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if (!ingredient.trim()) {
            setError('Please enter an ingredient');
            return;
        }
        if (ingredients.includes(ingredient.toLowerCase().trim())) {
            setError('This ingredient is already added');
            return;
        }
        onAddIngredient(ingredient.toLowerCase().trim());
        setIngredient('');
        setError('');
    }
    return (
            <form onSubmit={handleSubmit} className = "Ingredient-form">
                <div className = "input-group">
                <input 
                    type = "text"
                    placeholder = "e.g. Chicken"
                    aria-label = "Add an ingredient"
                    name = "ingredient"
                    className="ingredient-input"
                    onChange={(e) => setIngredient(e.target.value)}
                    value={ingredient}
                />
                <button className="add-btn">+ Add Ingredient</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>

    )
}