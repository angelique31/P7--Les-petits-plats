import recipesItem from "../recipesItem/recipesItem";
import recipesNotFound from "../recipesNotFound/recipesNotFound";

/**
 * Fonction qui permet l'affichage des cartes  
 * @param {*} recipes 
 */
 function recipesList(recipes){
    const container = document.querySelector('.recipe__section');
    container.innerHTML = '';
    const isEmpty = recipes && !recipes[0];

    if (isEmpty) {
        recipesNotFound(true);
       
    } else {
        recipesNotFound(false);
        recipes.forEach((recipe) => {
            recipesItem(recipe, container);   
        });
    }
    
}
export default recipesList;
