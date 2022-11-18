import { getRecipes } from '../utils/api';
import ingredientSelected from '../components/filters/filtersList/filtersList';
import { applianceSelected,  ustensilSelected} from '../components/tagInputLists';
import { } from '../components/tagsInput';
import { searchButtonsInput } from '../utils/search';
import displayRecipes from '../components/recipes';
import  displaySearch from '../components/search/search';

async function init() {
    const { recipes } = await getRecipes();

    displayRecipes(recipes);
    displaySearch(recipes);
    searchButtonsInput(recipes);

    ingredientSelected(recipes);
    ustensilSelected(recipes);
    applianceSelected(recipes);
}
init();

