import displayRecipes from '../recipes';
import { formatText } from '../../utils/format';
import filtersList from '../filters/filtersList/filtersList';

let searchInput = document.querySelector('#search_input');

/**
 * Fonction de recherche de la barre principale avec la boucle for
 */
function search(recipes) {
    /**
   * Fonction qui récupère tous les ingrédients
   * @param {*} item 
   * @param {*} inputs 
   * @returns response 
   */
    const checkIngredients = (item, inputs) => {
        let response = false;
        for (let j = 0; j < item.ingredients.length; j++) {
            if (formatText(item.ingredients[j].ingredient).includes(inputs)) {
                response = true;
            }
        }
        return response;
    };
    const filterData = (e) => {
        let recipesArray = [];
        const inputLetters = formatText(e.target.value);
        if (inputLetters.length > 2) {
            // on boucle sur chaque recette
            for (let i = 0; i < recipes.length; i++) {
                const recipe = recipes[i];
                const formatedRecipe = {
                    name: formatText(recipe.name),
                    description: formatText(recipe.description),
                    ingredients: recipe.ingredients,
                };
                if (
                    formatedRecipe.name.includes(inputLetters) ||
          formatedRecipe.description.includes(inputLetters) ||
          checkIngredients(recipes[i], inputLetters)
                ) {
                    recipesArray.push(recipes[i]);
                }
            }
            displayRecipes(recipesArray);
            filtersList(recipesArray);
        }
        if(inputLetters.length === 0 ) {
            displayRecipes(recipes); 
            filtersList(recipes);
        }
    };
    searchInput.addEventListener('input', filterData);
}
export default search;
