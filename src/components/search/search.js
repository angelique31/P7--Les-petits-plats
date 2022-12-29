import displayRecipes from "../recipes";
import { formatText } from "../../utils/format";
import filtersList from "../filters/filtersList/filtersList";

let searchInput = document.querySelector("#search_input");

/**
 * Fonction de recherche avec la boucle for
 */
function search(recipes) {
  // console.log(recipes);
  let recipesArray = [];
  const filterData = (e) => {
    const inputLetters = formatText(e.target.value);
    if (inputLetters.length > 2) {
      for (let i = 0; i < recipes.length; i++) {
        // console.log(recipes[i])
        if (formatText(recipes[i].name).includes(inputLetters) ||
            formatText(recipes[i].description).includes(inputLetters)) {
                recipesArray.push(recipes[i]);
        } else {
          for (let j = 0; j < recipes[i].ingredients.length; j++) {
            if (formatText(recipes[i].ingredients[j].ingredient).includes(inputLetters)) {
                recipesArray.push(recipes[i]);
            }
          }
        }
        console.log(recipesArray);
      }

      return recipesArray;
    }
    displayRecipes(recipesArray); //fonction appelée qui permet le tri des cartes des recettes
    filtersList(recipesArray);
  };
  searchInput.addEventListener("input", filterData);
}
export default search;
