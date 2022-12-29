import displayRecipes from "../recipes";
import { formatText } from "../../utils/format";
import filtersList from "../filters/filtersList/filtersList";

let searchInput = document.querySelector("#search_input");

/**
 * Fonction de recherche avec la boucle for
 */
function search(recipes) {

  const checkIngredients = (item, inputs) => {
    // console.log(item, inputs);
    let response = false;

    for (let j = 0; j < item.ingredients.length; j++) {
        // console.log(item.ingredients[j])
      if (item.ingredients[j].ingredient.includes(inputs)) {
        response = true;
      }
    }
    return false;
  };

  let recipesArray = [];
  const filterData = (e) => {
    const inputLetters = formatText(e.target.value);
    if (inputLetters.length > 2) {
      for (let i = 0; i < recipes.length; i++) {
        //   console.log(recipes[i]);
        const formatedInput = formatText(inputLetters);
        // console.log(formatedInput);
        const recipe = recipes[i];
        const formatedRecipe = {
          name: recipe.name,
          description: recipe.description,
          ingredients: recipe.ingredients,
        };
        // console.log(formatedRecipe);
        if (
          formatedRecipe.name.includes(inputLetters) ||
          formatedRecipe.description.includes(inputLetters) ||
          checkIngredients(recipes[i], inputLetters)
        ) {
          recipesArray.push(recipes[i]);
        }
        console.log(recipesArray);
      }
      displayRecipes(recipesArray);
      filtersList(recipesArray);
    }

  };
  searchInput.addEventListener("input", filterData);
}
export default search;
