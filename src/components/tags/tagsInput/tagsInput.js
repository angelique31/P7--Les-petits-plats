// Les inputs ingrédients, appareils et ustensiles
const ingredient = document.querySelector('#ingredient_button');
const appliance = document.querySelector('#appliance_button');
const ustensils = document.querySelector('#ustensil_button');


//Les inputs ouverts au clic avec placeholder "Rechercher un ingrédient"
const ingredientList = document.querySelector('#ingredient-list');
const appliancetList = document.querySelector('#appliance-list');
const ustensilList = document.querySelector('#ustensil-list');

//La liste des ingrédients, appareils, et ustensiles
const ingredientListMenu = document.querySelector('#ingredient-list-menu');
const applianceListMenu = document.querySelector('#appliance-list-menu');
const ustensilListMenu = document.querySelector('#ustensil-list-menu');

//Les chevrons
const chevronDownIngredient = document.querySelector('#chevron-down-ingredient');
const chevronDownAppliance = document.querySelector('#chevron-down-appliance');
const chevronDownUstensils = document.querySelector('#chevron-down-ustensils');
const chevronUpIngredient = document.querySelector('#chevron-up-ingredient');
const chevronUpAppliance = document.querySelector('#chevron-up-appliance');
const chevronUpUstensils = document.querySelector('#chevron-up-ustensils');

/**************Ouverture des inputs au clic *************/

/**
 * Ouverture de l'input ingrédient au clic
 */
const openInputIngredient =  () => {
    ingredient.style.display = 'none';
    ingredientList.style.display = 'block';
    ingredientListMenu.style.display = 'block';
    chevronUpIngredient.style.display = 'block';
    chevronDownIngredient.style.display = 'none';

    appliance.style.display = 'flex';
    appliancetList.style.display = 'none';
    chevronDownAppliance.style.display = 'block';

    ustensils.style.display = 'flex';
    ustensilList.style.display = 'none';
    chevronDownUstensils.style.display = 'block';
};
ingredient.addEventListener ('click', openInputIngredient);

/**
 * Ouverture de l'input appareil au clic
 */
const openInputAppliance = () => {
    appliance.style.display = 'none';
    appliancetList.style.display = 'block';
    applianceListMenu.style.display = 'block';
    chevronUpAppliance.style.display = 'block';
    chevronDownAppliance.style.display = 'none';

    ingredient.style.display = 'flex';
    ingredientList.style.display = 'none';
    chevronDownIngredient.style.display = 'block';
    
    ustensils.style.display = 'flex';
    ustensilList.style.display = 'none';
    chevronDownUstensils.style.display = 'block';
};
appliance.addEventListener ('click', openInputAppliance);

/**
 * Ouverture de l'input ustensiles au clic
 */
const openInputUstensil = () => {
    ustensils.style.display = 'none';
    ustensilList.style.display = 'block';
    ustensilListMenu.style.display = 'block';
    chevronUpUstensils.style.display = 'block';
    chevronDownUstensils.style.display = 'none';

    ingredient.style.display = 'flex';
    ingredientList.style.display = 'none';
    chevronDownIngredient.style.display = 'block';

    appliance.style.display = 'flex';
    appliancetList.style.display = 'none';
    chevronDownAppliance.style.display = 'block';
};
ustensils.addEventListener ('click', openInputUstensil);

/**************Fermeture des inputs au clic sur le chevron up *************/

/**
 * Fermeture de l'input ingrédient au clic sur le chevron up
 */
const closeInputIngredient = () => {
    ingredient.style.display = 'flex';
    ingredientList.style.display = 'none';
    chevronDownIngredient.style.display = 'block';
};

chevronUpIngredient.addEventListener ('click', closeInputIngredient);

/**
 * Fermeture de l'input appliance au clic sur le chevron up
 */
const closeInputAppliance = () => {
    appliance.style.display = 'flex';
    appliancetList.style.display = 'none';
    chevronDownAppliance.style.display = 'block';
};
chevronUpAppliance.addEventListener ('click', closeInputAppliance);

/**
 * Fermeture de l'input ustensiles au clic sur le chevron up
 */
const closeInputUstensils = () => {
    ustensils.style.display = 'flex';
    ustensilList.style.display = 'none';
    chevronDownUstensils.style.display = 'block';
};

chevronUpUstensils.addEventListener ('click', closeInputUstensils);


