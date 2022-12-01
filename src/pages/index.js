import { getRecipes } from "../utils/api";
import filtersList from "../components/filters/filtersList/filtersList";
import {} from "../components/tags/tagsInput/tagsInput";
import searchButtonsInput from "../utils/search";
import displayRecipes from "../components/recipes";
import search from "../components/search/search";


async function init() {
  const { recipes } = await getRecipes();

  displayRecipes(recipes);
  search(recipes);
  filtersList(recipes);

  searchButtonsInput(recipes);
}
init();
