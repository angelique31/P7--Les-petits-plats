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
                // console.log(ingredients)
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
            filtersList(result);
        } 
        
        if(inputLetters.length === 0 ) {
            displayRecipes(recipes); //fonction appelée qui permet le tri des cartes des recettes    
            filtersList(recipes);
        }
       
    };
    searchInput.addEventListener('input', filterData);
}

export default search;

// 2e cas avec une boucle for :

// function search (recipes) {
//     // console.log(recipes);
//     let recipesArray = [];
    
//     const filterData = (e) => {
//         const inputLetters = formatText(e.target.value);
        
//         if (inputLetters.length > 2 ) {
//             const ingredientArray = [];
//             for (let i = 0; i < recipes.length; i++) {
//                 // console.log(recipes[i]);
//                 for (let j = 0; j < recipes[i].ingredients.length; j++) {
//                     // console.log(recipes[i].ingredients);
//                     ingredientArray.push(recipes[i].ingredients[j]);
//                     // console.log(ingredientArray);
//                 }
//                 if(recipes[i].name.toLowerCase().includes(inputLetters) ||
//                 recipes[i].description.toLowerCase().includes(inputLetters) ||
//                 ingredientArray.toLowerCase().includes(inputLetters)) {
//                     recipesArray.push(recipes[i]);
//                 }
                    
//             }
//             // console.log(recipesArray);   
    
//             displayRecipes(recipesArray);
//             filtersList(recipesArray);
//         }
        
//     };
//     searchInput.addEventListener('input', filterData);
// }
// export default search;

