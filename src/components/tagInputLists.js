import configFilters from '../configs/filters';
import {closeTagIngredient, closeTagAppliance, closeTagUstensil} from './closeTags';
import searchByfilters, { getFilters } from '../utils/filter';

// import { tagArray } from './tagArray';

/**
 * 
 * Fonction pour mettre les ingredients dans un array (pour pouvoir utiliser la methode new Set) puis pour les placer dans le filtre ingredient
 */
export const ingredientSelected =  (recipes) => {
    let data = [];

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if(ingredient.ingredient){
                data.push(ingredient.ingredient);
            }
        });
    });
            //new Set pour supprimer les doublons du tableau ingredientSort
            let ingredientSort =  [...new Set(data)].sort();
            // console.log(ingredientSort);
            const listTags = document.querySelectorAll(`.${configFilters.ingredient.tag}`);
            // console.log(listTags)
            const ingredients = document.querySelectorAll('.ingredient');
            // ingredientTag();
            // closeTagIngredient(idTag, idButton, recipes);
            searchByfilters(recipes);
           

            
   
    /**
     * 
     */
    const getInputs = () => {
        const tag = getFilters();
        // console.log(tag);
    };
    getInputs();

    
};

/**
 * 
 * fonction pour mettre les appareils dans un array
 */
export const applianceSelected =  (recipes) => {
    let data = [];

    for (let i = 0; i < recipes.length; i++) {
        if(recipes[i].appliance){
            data.push(recipes[i].appliance);
        }
    }

    /**
    * 
    */
    const getInputs = () => {
        const tag = getFilters();
        // console.log(tag);
    };
    getInputs();

    
    let applianceListMenu = document.querySelector('#appliance-list-menu');
    const applianceSort =  [...new Set(data)].sort();
    // console.log(applianceSort);

    applianceListMenu.innerHTML = applianceSort.map((name, index)=>`<li class="appliance" id="appliance-${index}">${name}</li>`).join (' ');
  

    /**
    * Fonction permettent l'affichage d'un appareil dans un tag
    */
    const applianceTag =  () => {
        //Je sélectionne les li des appareils de l'input :
        const appliances = document.querySelectorAll('.appliance');
    
        //Comme j'obtiens un tableau, je fais un forEach pour exécuter 
        //une fonction donnée sur chaque élément du tableau, càd 
        //de chaque appareil:
        appliances.forEach(function (appliance) {
            appliance.addEventListener('click', () => {
                const tagContainer = document.querySelector('#selected__tag');
                const idTag= `tag-appliance-${appliance.id}`;
                const idButton  = `tag-ingredient-close-${appliance.id}`;
                
                const tag = `
                <div id="${idTag}" class="${configFilters.appliance.tag}" >
                    <span>${appliance.innerHTML}</span>
                    <i class="far fa-times-circle" id="${idButton}"></i>
                </div>`;
                
                tagContainer.insertAdjacentHTML('beforeend', tag);
                closeTagAppliance(idTag, idButton, recipes);
                searchByfilters(recipes);
            });
        });
    };
    applianceTag();

    
};

/**
 * 
 * fonction pour mettre les ustensiles dans un array 
 */
export const ustensilSelected =  (recipes) => {
    let data = [];

    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if(ustensil){
                data.push(ustensil);
            }
        });
    });

    const ustensileSort =  [...new Set(data)].sort();
    // console.log(ustensileSort);
    let ustensilListMenu = document.querySelector('#ustensil-list-menu');
    ustensilListMenu.innerHTML = ustensileSort.map((name, index)=>`<li class="ustensil" id="ustensil-${index}">${name}</li>`).join (' ');
    
    /**
    * Fonction permettent l'affichage d'un ustensile dans un tag
    */
    const ustensilTag =  () => {
        const ustensils = document.querySelectorAll('.ustensil');
        
        ustensils.forEach(function (ustensil) {
            ustensil.addEventListener('click', () => {
                const tagContainer = document.querySelector('#selected__tag');
                const idTag= `tag-appliance-${ustensil.id}`;
                const idButton  = `tag-ingredient-close-${ustensil.id}`;
                const tag = `
                <div id="${idTag}" class="${configFilters.ustensil.tag}" >
                    <span>${ustensil.innerHTML}</span>
                    <i class="far fa-times-circle" id="${idButton}"></i>
                </div>`;
                
                tagContainer.insertAdjacentHTML('beforeend', tag);
                closeTagUstensil(idTag, idButton, recipes);
                searchByfilters(recipes);
            });
        });
    };
    ustensilTag();
};

