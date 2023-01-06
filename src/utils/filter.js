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
    return filters;
};


/**
 * Tri les recettes en fonction de la correspondance entre le filtre et le tag actif
 * @param {array} recipes
 * @param {array} filters
 * @return recettes filtrées
 */
const filterIngredients = (ingredients, value) => {
    return ingredients.find((item) => formatText(item.ingredient).includes(value));
};

const filterAppliances = (appliance, value) => {
    return formatText(appliance).includes(value);
};

const filterUstensils = (ustensils, value) => {
    return ustensils.find((item) => formatText(item).includes(value));
};

const search = (value, type, recipe) => {
    let match = '';
    const formatedRecipe = {
        name: formatText(recipe.name),
        ingredients: recipe.ingredients,
        appliance: recipe.appliance,
        ustensils: recipe.ustensils,
        description: formatText(recipe.description),
    };

    switch (type) {
    case configFilters.ingredient.type:
        match = formatedRecipe.name.includes(value) || filterIngredients(formatedRecipe.ingredients, value) || formatedRecipe.description.includes(value);
        break;
    case configFilters.appliance.type:
        match = formatedRecipe.name.includes(value) || filterAppliances(formatedRecipe.appliance, value) || formatedRecipe.description.includes(value);
        break;
    case configFilters.ustensil.type:
        match = formatedRecipe.name.includes(value) || filterUstensils(formatedRecipe.ustensils, value) || formatedRecipe.description.includes(value);
        break;
    default:
        match = formatedRecipe.name.includes(value) || filterIngredients(formatedRecipe.ingredients, value) || formatedRecipe.description.includes(value);
    }
    return match;
};

export const getRecipes = (recipes, filters) => {
    let result = [];
    for (let i = 0; i < filters.length; i++) {
        const value = filters[i].value;
        result = recipes.filter((recipe) => search(value, filters[i].type, recipe));
    }
    const resultSort = [...new Set(result)].sort();
    return resultSort;
};


/**
 * Gère l'affichage des recettes filtrées
 * @param {array} recipes
 */
const searchByfilters = (recipes) => {
    //récupère les tags :
    const filters = getFilters();
    if (filters.length === 0) {
        displayRecipes(recipes);
        filtersList(recipes);
    } else {
        const recipesFilters = getRecipes(recipes, filters);
        displayRecipes(recipesFilters);
        filtersList(recipesFilters);
    } 
};
export default searchByfilters;