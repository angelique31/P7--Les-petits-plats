// import displayRecipes from '../pages/index';
import { formatText } from '../utils/format';

 const inputSearchIngredient = document.querySelector('.ingredient-list');
/**
 * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes 
 */
 const searchButtonsInput = (recipes) => {
    let arrayResult = [];
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);
        console.log(lettersInput);
        if (lettersInput.length >= 1) {
            const filterIngredients = (ingredients) => {
                return ingredients.find(item => formatText(item.ingredient).includes(lettersInput));
            };

            arrayResult = recipes.filter(recipe => {
                const formatedRecipe = {
                    ingredients: recipe.ingredients,
                };
                
                const match = filterIngredients(formatedRecipe.ingredients);
                return match;
                
            });
            console.log(arrayResult);
            
            
            displayRecipes(arrayResult); //fonction appelée qui permet le tri des cartes des recettes    
            
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};
export default searchButtonsInput;