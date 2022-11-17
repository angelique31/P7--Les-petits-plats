

const inputSearchIngredient = document.querySelector('.ingredient-list');
console.log(inputSearchIngredient);
// const listIngredient = document.querySelector('.selection__button__list__ingredients');

/**
 * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes 
 */
export const searchButtonsInput = (recipes) => {
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
            
            
            displayRecipe(arrayResult); //fonction appelée qui permet le tri des cartes des recettes    
            
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};


// Recherche saisie bouttons 
// const searchButtonInput = (recipes) => {
//     const inputSearchIngredient = document.querySelector('.selection_button_ingredients');
//     // console.log(inputSearchIngredient)

//     const listIngredient = document.querySelector('.selection__button__list__ingredients');


//     // Input recherche boutton Ingrédient 
//     inputSearchIngredient.addEventListener('input', (e) => {
//         e.preventDefault();
//         listIngredient.innerHTML = '';
//         // Affichage de la liste ingredients en rapport à la saisie 
//         (
//             searchButtonsInput(e.target.value,  ingredientSelected(recipes))
//         );
//         console.log(e.target.value);
//         // searchButtonClick();
    
//     });
//     // console.log(ingredientSelected(recipes));
// };

// searchButtonInput();

// 2e cas avec une boucle for :

// function search (recipes) {
//     let recipesArray = [];
//     // let recipesIndex = 0;
//     const filterData = (e) => {
//         const inputLetters = formatText(e.target.value);
        
//         if (inputLetters.length > 2 ) {
//             for (let i = 0; i < recipes.length; i++) {
//                 if(recipes[i].name.toLowerCase().includes(inputLetters) ||
//                 recipes[i].description.toLowerCase().includes(inputLetters) ||
//                 recipes[i].ingredients[0].ingredient.toLowerCase().includes(inputLetters)) {
//                     // recipesIndex++;
//                     recipesArray.push(recipes[i]);
//                 }
                    
//             }
//             console.log(recipesArray);   
//             // console.log(recipesIndex);
//         }
//         displayRecipe(recipesArray);
//     };
//     searchInput.addEventListener('input', filterData);
// }
// export default search;


