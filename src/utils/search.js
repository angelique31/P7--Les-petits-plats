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
             * @param {array} array (les 50 recettes)
             */
            const getIngredientsList = (array) => {
                // console.log(array);
                const result = [];
                for (let i = 0; i < array.length; i++) {
                    //on boucle sur les 50 recettes
                    // console.log(array[i])
                    const ingredients = array[i].ingredients;
                    // console.log(ingredients)
                    for (let j = 0; j < ingredients.length; j++) {
                        result.push(ingredients[j].ingredient);
                        // console.log(result);
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
                // console.log(array, input)
                const result = [];
                //on boucle sur les ingrédients triés (sans doublons)
                for (let i = 0; i < array.length; i++) {
                    // console.log(array[i])
                    //Si la valeur du filtre (ici un ingrédient) correspond à ce que l'on tape dans l'input,
                    //on affiche le résultat  
                    if (formatText(array[i]).includes(input)) {
                        result.push(array[i]);
                        // console.log(result);
                    }
                }
                return result;
            };

            // La liste de tous les ingrédients
            const ingredientsList = getIngredientsList(recipes);
            // La liste des ingrédients triés (sans doublons)
            const ingredientReduce = getIngredientsSort(ingredientsList);
            // correspondance entre les ingrédients triés et ce que l'on tape dans l'input
            const match = getIngredientFilter(ingredientReduce, lettersInput);
            // console.log(match);
            const filter = {
                type: 'ingredient',
                container: '#ingredient-list-menu',
                values: match,
                config: configFilter.ingredient,
            };
            // console.log(filter);
            filtersColumn(recipes, filter);            
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};
export default searchButtonsInput;