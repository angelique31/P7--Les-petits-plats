import configFilters from '../configs/filters';
import { formatText } from './format';
import  { displayRecipes } from '../pages/index';
import { applianceSelected, ingredientSelected, ustensilSelected } from '../components/tagInputLists';
import { searchButtonsInput } from './search';



/**
 * Récupérer correctement les filtres
 * Fonction qui récupère la valeur du tag.
 * On créé les types et valeurs des tags
 */
export const getFilters = () => {
    const container = document.getElementById('selected__tag');
    const filters = [];

    /**
   * On créé le type de tag en reprenant l'objet initialisé dans ./configs/filters
   * @param {*} className
   * @returns
   */
    const getType = (className) => {
        let type = '';
        switch (className) {
        case configFilters.ingredient.tag:
            type = configFilters.ingredient.type;
            break;
        case configFilters.appliance.tag:
            type = configFilters.appliance.type;
            break;
        case configFilters.ustensil.tag:
            type = configFilters.ustensil.type;
            break;
        default:
            type = '';
            break;
        }
        return type;
    };

    /**
   * On créé la valeur du tag
   * @param {*} tag
   * @returns
   */
    const getValue = (tag) => {
        const span = tag.children[0];
        // console.log(span);
        const value = formatText(span.textContent);
        // console.log(value);
        
        return value;
    };
    // container.children = les éléments enfants du container des tags
    for (let i = 0; i < container.children.length; i++) {
        const tag = container.children[i];
        // console.log(tag);
        let filter = { type: getType(tag.className), value: getValue(tag) };
        // console.log(filter);
        filters.push(filter);
    }
    // console.log(filters);
    return filters;
};

/**
 * TODO
 * Etape 2 - faire la recherche en fonction des recettes et filtres
 */

/**
 * Tri les recettes en fonction des filtres
 * @param {array} recipes
 * @param {array} filters
 * @return - recettes filtrées
 */
export const getRecipes = (recipes, filters) => {
    // console.log('getRecipes params', recipes, filters);
    // console.log(filters[0].value);
    let result = [];

    const filterIngredients = (ingredients, value) => {
        return ingredients.find((item) =>
            formatText(item.ingredient).includes(value)
        );
    };

    const search = (value) => recipes.filter((recipe) => {
        const formatedRecipe = {
            name: formatText(recipe.name),
            ingredients: recipe.ingredients,
            description: formatText(recipe.description),
        };

        const match =
      formatedRecipe.name.includes(value) ||
      filterIngredients(formatedRecipe.ingredients) ||
      formatedRecipe.description.includes(value);

        return match;
    });
    
  
    for (let i = 0; i < filters.length; i++) {
        // console.log(filters);
        const value = filters[i].value;
        
        const match = search (value);
        if (match && match[0]) {
            result = result.concat(match);
        } 
    }
    // console.log(result);
   
    return result;
};

/**
 * TODO
 * Etape 3- afficher les recettes dans le DOM
 */

/**
 * Affiche les données dans le DOM
 * @param {array} recipes
 */
// const getDisplay = (recipes) => {
//     // console.log('getDisplay params', recipes);
//     displayRecipes(recipes);
// };

/**
 * Affiche les ingrédients filtrés dans l'input ingredient
 * @param {*} recipes 
 */
const updateInput = (recipes) => {
    ingredientSelected(recipes);
    applianceSelected(recipes);
    ustensilSelected(recipes);
    // console.log(recipes);
};

const updateButtonsInput = () => {
    searchButtonsInput();
};


/**
 * Gère l'affichage des recettes
 * @param {array} recipes
 */
const searchByfilters = (recipes) => {
    //récupère les tags :
    const filters = getFilters();
    // console.log(filters)
    const recipesFilters = getRecipes(recipes, filters);
    // console.log(recipesFilters);
    // getDisplay(recipesFilters);
    updateInput(recipesFilters);
    updateButtonsInput();
};

export default searchByfilters;
