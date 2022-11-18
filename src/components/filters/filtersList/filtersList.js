/**
 * 
 * Fonction pour mettre les ingredients dans un array (pour pouvoir utiliser la methode new Set) puis pour les placer dans le filtre ingredient
 */
 const ingredientSelected =  (recipes) => {
    let data = [];

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if(ingredient.ingredient){
                data.push(ingredient.ingredient);
            }
        });
    });

    let ingredientSort =  [...new Set(data)].sort();
    // console.log(ingredientSort);
};
export default ingredientSelected;