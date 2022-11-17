import displayRecipes from '../recipes';
import { formatText } from '../../utils/format';

let searchInput = document.querySelector('#search_input');

/**
 * Fonction qui filtre les cartes en fonction de ce qui est tapé dan la barre de recherche
 * @param {*} recipes 
 */
function search (recipes) {
    let result = [];
    const filterData = (e) => {
        const inputLetters = formatText(e.target.value);
        console.log(inputLetters);
        if (inputLetters.length > 2 ) {
            const filterIngredients = (ingredients) => {
                return ingredients.find(item => formatText(item.ingredient).includes(inputLetters));
            };

            result = recipes.filter(recipe => {
                const formatedRecipe = {
                    name: formatText(recipe.name),
                    ingredients: recipe.ingredients,
                    description: formatText(recipe.description),
                };
                
                const match = formatedRecipe.name.includes(inputLetters)
    || filterIngredients(formatedRecipe.ingredients)
    || formatedRecipe.description.includes(inputLetters);
    
                return match;
                
            });
            // console.log(result);
 
            
            displayRecipes(result); //fonction appelée qui permet le tri des cartes des recettes    
        } 
       
    };
    searchInput.addEventListener('input', filterData);
}

export default search;
