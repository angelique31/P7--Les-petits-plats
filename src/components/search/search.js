import displayRecipes from '../recipes';
import { formatText } from '../../utils/format';
import filtersList from '../filters/filtersList/filtersList';

let searchInput = document.querySelector('#search_input');

/**
 * Fonction qui filtre les cartes en fonction de ce qui est tapé dan la barre de recherche
 * @param {*} recipes
 */
function search (recipes) {
    let result = [];
    const filterData = (e) => {
        const inputLetters = formatText(e.target.value);
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

            displayRecipes(result); //fonction appelée qui permet le tri des cartes des recettes
            filtersList(result);
        }
        if(inputLetters.length === 0 ) {
            displayRecipes(recipes); 
            filtersList(recipes);
        }
    };
    searchInput.addEventListener('input', filterData);
}
export default search;


