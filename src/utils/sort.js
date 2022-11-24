
/**
 * Trier les ingrédients en enlevant les doublons
 * @param {*} recipes 
 * @returns - un tableau d'ingrédients triés (sans doublons)
 */
export const sortByIngredient = (recipes) => {
  let data = [];

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.ingredient) {
        data.push(ingredient.ingredient);
      }
    });
  });
  // console.log(data);
  //New set pour enlever les doublons
  let ingredientSort = [...new Set(data)].sort();
  // console.log(ingredientSort);
  return ingredientSort;
};

/**
 * Trier les appareils en enlevant les doublons
 * @param {*} recipes 
 * @returns un tableau d'appareils triés (sans doublons)
 */
export const sortByAppliance = (recipes) => {
    let data = [];
  
    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].appliance){
            data.push(recipes[i].appliance);
        }
    }
    let applianceSort = [...new Set(data)].sort();
    return applianceSort;
  };
  
  /**
 * Trier les ustensils en enlevant les doublons
 * @param {*} recipes 
 * @returns un tableau d'ustensils triés (sans doublons)
 */
  export const sortByUstensile = (recipes) => {
    let data = [];
  
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if(ustensil){
                data.push(ustensil);
            }
        });
    });
    let ustensileSort = [...new Set(data)].sort();
    return ustensileSort;
  };