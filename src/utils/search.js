
import { formatText } from '../utils/format';

import filtersList from '../components/filters/filtersList/filtersList';

 const inputSearchIngredient = document.querySelector('.ingredient-list');
/**
 * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes 
 */
 const searchButtonsInput = (recipes) => {
    // console.log(recipes);
    let arrayResult = [];
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);
        console.log(lettersInput);
        if (lettersInput.length >= 1) {
            const ingredientsArray = [];
            for (let i = 0; i < recipes.length; i++) {
                const ingredients = recipes[i].ingredients;
                for (let j = 0; j < ingredients.length; j++) {
                    ingredientsArray.push(ingredients[j]);
                 console.log('test')   
                }
            }
            console.log('fin de la boucle')
            const filtersIngredients = [...new Set(ingredientsArray)].sort();
            const filterIngredients = (ingredients) => {
                return ingredients.find(item => formatText(item).includes(lettersInput));
            };

            
            const match = filterIngredients(filtersIngredients);
               
            // console.log(arrayResult);
            filtersList(match);
            
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};
export default searchButtonsInput;