import searchByfilters from '../utils/filter';

/**
 * Ajoute l'action de fermeture au tag
 * @param {string} tagComponent 
 * @param {string} tagButtonClose 
 */
export function closeTagIngredient (idTag, idButton, recipes) {

    const actionClose = () => { 
        const tagComponent = document.getElementById(idTag);
        // console.log(tagComponent);
        tagComponent.remove();
        searchByfilters(recipes);
    };

    const tagButton = document.getElementById(idButton);
    // console.log(idButton);
    tagButton.addEventListener('click', actionClose);
}


/**
 * Fonction qui permet d'enlever le tag au clic sur la croix
 */
export function closeTagAppliance (idTag, idButton, recipes) {

    const actionClose = () => { 
        const tagComponent = document.getElementById(idTag);
        tagComponent.remove();
        searchByfilters(recipes);
    };

    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
}

/**
 * Fonction qui permet d'enlever le tag au clic sur la croix
 */
export function closeTagUstensil (idTag, idButton, recipes) {

    const actionClose = () => { 
        const tagComponent = document.getElementById(idTag);
        tagComponent.remove();
        searchByfilters(recipes);
    };

    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
}