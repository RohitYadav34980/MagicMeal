export default function IngredientList({ ingredients, onRemoveIngredient }) {
    return (
        <div className="ingredient-list">
            <h3>Added Ingredients ({ingredients.length})</h3>
            {ingredients.length === 0 ? <p>No ingredients added yet</p> : (
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key = {index}>
                            {ingredient}
                            <button onClick={() => onRemoveIngredient(ingredient)}>×</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}