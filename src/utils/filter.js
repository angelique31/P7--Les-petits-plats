import configFilters from '../configs/filters';
import { formatText } from './format';
import displayRecipes from '../components/recipes';
import filtersList from '../components/filters/filtersList/filtersList';


/**
 * Fonction qui récupère la valeur du tag actif.
 * On créé les types et valeurs des tags actifs
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
        const value = formatText(span.textContent);
        return value;
    };
    // container.children = les éléments enfants du container des tags
    for (let i = 0; i < container.children.length; i++) {
        const tag = container.children[i];
        let filter = { type: getType(tag.className), value: getValue(tag) };
        filters.push(filter);
    }
    // console.log(filters);
    return filters;
};


/**
 * Tri les recettes en fonction de la correspondance entre le filtre et le tag actif
 * @param {array} recipes
 * @param {array} filters
 * @return recettes filtrées
 */
export const getRecipes = (recipes, filters) => {
    // console.log(filters);
    let result = [];

    const filterIngredients = (ingredients, value) => {
        // console.log(ingredients, value)
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
      filterIngredients(formatedRecipe.ingredients, value) ||
      formatedRecipe.description.includes(value);

        return match;
    });
    
  
    for (let i = 0; i < filters.length; i++) {
        // console.log(filters);
        const value = filters[i].value;
        // console.log(value);
        result = search(value);
        console.log(result);
    }
    
    const resultSort = [...new Set(result)].sort();
    // console.log(resultSort);
    return resultSort;
};



/**
 * Gère l'affichage des recettes filtrées
 * @param {array} recipes
 */
const searchByfilters = (recipes) => {
    //récupère les tags :
    const filters = getFilters();
    // console.log(filters);
    if (filters.length === 0) {
        displayRecipes(recipes);
        filtersList(recipes);
    } else {
        const recipesFilters = getRecipes(recipes, filters);
        // console.log(recipesFilters)
        displayRecipes(recipesFilters);
        filtersList(recipesFilters);
    } 
};
export default searchByfilters;
