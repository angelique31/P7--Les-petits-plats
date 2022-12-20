import configFilter from '../configs/filters';
import { formatText } from '../utils/format';
import filtersColumn from '../components/filters/filtersColumn/filtersColumn';

const inputSearchIngredient = document.querySelector('.ingredient-list');
/**
 * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes 
 */
const searchButtonsInput = (recipes) => {
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);

        if (lettersInput.length >= 1) {

            /**
             * Construit la liste brute des ingrédients
             * @param {array} array 
             */
            const getIngredientsList = (array) => {
                const result = [];
                for (let i = 0; i < array.length; i++) {
                    const ingredients = array[i].ingredients;
                    for (let j = 0; j < ingredients.length; j++) {
                        result.push(ingredients[j].ingredient);
                    }
                }
                return result;
            };

            /**
             * Supprime les ingrédients duppliqués
             * @param {array} array 
             * @returns 
             */
            const getIngredientsSort = (array) => {
                return [...new Set(array)].sort();
            };

            const getIngredientFilter = (array, input) => {
                const result = [];

                for (let i = 0; i < array.length; i++) {

                    if (formatText(array[i]).includes(input)) {
                        result.push(array[i]);
                    }
                }
                return result;
            };

            const ingredientsList = getIngredientsList(recipes);
            const ingredientReduce = getIngredientsSort(ingredientsList);
            const match = getIngredientFilter(ingredientReduce, lettersInput);

            const filter = {
                type: 'ingredient',
                container: '#ingredient-list-menu',
                values: match,
                config: configFilter.ingredient,
            };

            filtersColumn(recipes, filter);            
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};
export default searchButtonsInput;