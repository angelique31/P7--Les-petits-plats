import configFilter from '../configs/filters';
import { formatText } from '../utils/format';
import filtersColumn from '../components/filters/filtersColumn/filtersColumn';

const inputSearchIngredient = document.querySelector('.ingredient-list');
/**
 * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes
 */
export const searchButtonsInput = (recipes) => {
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);
        if (lettersInput.length >= 1) {
            /**
       * Construit la liste brute des ingrédients
       * @param {array} array (les 50 recettes)
       */
            const getIngredientsList = (array) => {
                const result = [];
                //on boucle sur les 50 recettes
                for (let i = 0; i < array.length; i++) {
                    //on boucle sur les ingrédients qui contiennent eux même un tableau d'objet
                    const ingredients = array[i].ingredients;
                    for (let j = 0; j < ingredients.length; j++) {
                        result.push(ingredients[j].ingredient);
                    }
                }
                return result;
            };

            /**
       * Supprime les ingrédients dupliqués
       * @param {array} array
       * @returns
       */
            const getIngredientsSort = (array) => {
                return [...new Set(array)].sort();
            };

            const getIngredientFilter = (array, input) => {
                const result = [];
                //on boucle sur les ingrédients triés (sans doublons)
                for (let i = 0; i < array.length; i++) {
                    //Si la valeur du filtre (ici un ingrédient) correspond à ce que l'on tape dans l'input,
                    //on affiche le résultat
                    if (formatText(array[i]).includes(input)) {
                        result.push(array[i]);
                    }
                }
                return result;
            };

            // La liste de tous les ingrédients
            const ingredientsList = getIngredientsList(recipes);
            // La liste des ingrédients triés (sans doublons)
            const ingredientReduce = getIngredientsSort(ingredientsList);
            // Correspondance entre les ingrédients triés et ce que l'on tape dans l'input
            const match = getIngredientFilter(ingredientReduce, lettersInput);
            const filter = {
                type: 'ingredient',
                container: '#ingredient-list-menu',
                values: match,
                config: configFilter.ingredient,
            };
            filtersColumn(recipes, filter);
        }
    };
    inputSearchIngredient.addEventListener('input', filterDataInput);
};


const inputSearchAppliance = document.querySelector('.appliance-list');
/**
 * Fonction qui filtre les appareils en fonction de ce qui est tapé dans l'input ingredient
 * @param {*} recipes
 */
export const searchButtonsInputAppliance = (recipes) => {
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);
        if (lettersInput.length >= 1) {
            /**
       * Construit la liste brute des appareils
       * @param {array} array (les 50 recettes)
       */
            const getAppliancesList = (array) => {
                const result = [];
                //on boucle sur les 50 recettes
                for (let i = 0; i < array.length; i++) {
                    const appliance = array[i].appliance;
                    //on créé un nouveau tableau avec la liste de tous les appareils
                    result.push(appliance);
                }
                return result;
            };

            /**
       * Supprime les appareils dupliqués
       * @param {array} array
       * @returns
       */
            const getAppliancesSort = (array) => {
                return [...new Set(array)].sort();
            };

            const getApplianceFilter = (array, input) => {
                const result = [];
                //on boucle sur les appareils triés (sans doublons)
                for (let i = 0; i < array.length; i++) {
                    //Si la valeur du filtre  correspond à ce que l'on tape dans l'input,
                    //on affiche le résultat
                    if (formatText(array[i]).includes(input)) {
                        result.push(array[i]);
                    }
                }
                return result;
            };
      
            const appliancesList = getAppliancesList(recipes);
            const applianceReduce = getAppliancesSort(appliancesList);
            const match = getApplianceFilter(applianceReduce, lettersInput);
            const filter = {
                type: 'appliance',
                container: '#appliance-list-menu',
                values: match,
                config: configFilter.ingredient,
            };
            // console.log(filter);
            filtersColumn(recipes, filter);
        }
    };
    inputSearchAppliance.addEventListener('input', filterDataInput);
};


const inputSearchUstensil = document.querySelector('.ustensil-list');
/**
 * Fonction qui filtre les appareils en fonction de ce qui est tapé dans l'input appareil
 * @param {*} recipes
 */
export const searchButtonsInputUstensil = (recipes) => {
    const filterDataInput = (e) => {
        const lettersInput = formatText(e.target.value);
        if (lettersInput.length >= 1) {
            /**
       * Construit la liste brute des ustensils
       * @param {array} array (les 50 recettes)
       */
            const getUstensilsList = (array) => {
                const result = [];
                //on boucle sur les 50 recettes
                for (let i = 0; i < array.length; i++) {
                    //on récupère les ustensils (qui sont dans un tableau multi-dimensionnel)
                    const ustensil = array[i].ustensils;
                    //on reboucle pour récupérer tous les ustensils
                    for (let j = 0; j < ustensil.length; j++) {
                        //on ajoute au tableau la liste de tous les ustensils
                        result.push(ustensil[j]);
                    }
                }
                return result;
            };

            /**
       * Supprime les ustensils duppliqués
       * @param {array} array
       * @returns
       */
            const getUstensilSort = (array) => {
                return [...new Set(array)].sort();
            };

            const getUstensilFilter = (array, input) => {
                const result = [];
                for (let i = 0; i < array.length; i++) {
                    //Si la valeur du filtre (ici un ustensil) correspond à ce que l'on tape dans l'input,
                    //on affiche le résultat
                    if (formatText(array[i]).includes(input)) {
                        result.push(array[i]);
                    }
                }
                return result;
            };

            // La liste de tous les ustensils
            const ustensilsList = getUstensilsList(recipes);
            // La liste des ustensils triés (sans doublons)
            const ustensilsReduce = getUstensilSort(ustensilsList);
            // correspondance entre les ustensils triés et ce que l'on tape dans l'input
            const match = getUstensilFilter(ustensilsReduce, lettersInput);
            const filter = {
                type: 'ustensil',
                container: '#ustensil-list-menu',
                values: match,
                config: configFilter.appliance,
            };
            filtersColumn(recipes, filter);
        }
    };
    inputSearchUstensil.addEventListener('input', filterDataInput);
};
