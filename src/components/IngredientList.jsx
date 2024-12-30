export default function IngredientList({ ingredients, onRemoveIngredient }) {
    return (
        <div className="ingredient-list">
            <h3>Added Ingredients ({ingredients.length})</h3>
            {ingredients.length === 0 ? <p>No ingredients added yet</p> : (
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key = {index}>
                            {ingredient}
                            {/* <button onClick={() => onRemoveIngredient(ingredient)}>×</button> */}
                            <button class="deleteButton" onClick={() => onRemoveIngredient(ingredient)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 50 59"
                                class="bin"
                            >
                                <path
                                fill="#B5BAC1"
                                d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
                                ></path>
                                <path
                                fill="#B5BAC1"
                                d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
                                ></path>
                                <path
                                fill="#B5BAC1"
                                d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                ></path>
                                <path fill="#B5BAC1" d="M2 13H48L47.6742 21.28H2.32031L2 13Z"></path>
                            </svg>

                            <span class="tooltip">Delete</span>
                            </button>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}