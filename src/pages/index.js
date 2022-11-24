import { getRecipes } from "../utils/api";
import filtersList from "../components/filters/filtersList/filtersList";
import {} from "../components/tagsInput";
import { searchButtonsInput } from "../utils/search";
import displayRecipes from "../components/recipes";
import displaySearch from "../components/search/search";

async function init() {
  const { recipes } = await getRecipes();

  displayRecipes(recipes);
  displaySearch(recipes);
  searchButtonsInput(recipes);

  filtersList(recipes);
}
init();
