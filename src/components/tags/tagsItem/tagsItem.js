import configFilters  from '../../../configs/filters';
import searchByfilters from '../../../utils/filter';
/**
 * Fonction qui permet l'affichage d'un ingrédient dans un tag
 */
export const tagsItemIngredient = (ingredient, recipes) => {
  const container = document.getElementById('selected__tag');
  const idTag = `tag-ingredient-${ingredient.id}`;
  const idButton = `tag-ingredient-close-${ingredient.id}`;
  const tag = `
        <div id="${idTag}" class="${configFilters.ingredient.tag}" >
            <span>${ingredient.innerHTML}</span>
            <i class="far fa-times-circle" id="${idButton}"></i>
        </div>`;
  container.insertAdjacentHTML("beforeend", tag);
  searchByfilters(recipes);
  
  const actionClose = () => { 
    const tagComponent = document.getElementById(idTag);
    tagComponent.remove();
    searchByfilters(recipes);
  };
    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
};



/**
 * Fonction qui permet l'affichage d'un appareil dans un tag
 */
 export const tagsItemAppliance = (appliance) => {
  const container = document.getElementById('selected__tag');
  const idTag = `tag-appliance-${appliance.id}`;
  const idButton = `tag-ingredient-close-${appliance.id}`;
  const tag = `
              <div id="${idTag}" class="${configFilters.appliance.tag}" >
              <span>${appliance.innerHTML}</span>
              <i class="far fa-times-circle" id="${idButton}"></i>
              </div>`;
  
  container.insertAdjacentHTML("beforeend", tag);
  searchByfilters(recipes);

  const actionClose = () => { 
    const tagComponent = document.getElementById(idTag);
    tagComponent.remove();
    searchByfilters(recipes);
  };
    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
};


/**
 * Fonction qui permet l'affichage d'un ustensil dans un tag
 */
 export const tagsItemUstensil = (ustensil) => {
        const container = document.getElementById('selected__tag');
        const idTag = `tag-appliance-${ustensil.id}`;
        const idButton = `tag-ingredient-close-${ustensil.id}`;
        const tag = `
                <div id="${idTag}" class="${configFilters.ustensil.tag}" >
                <span>${ustensil.innerHTML}</span>
                <i class="far fa-times-circle" id="${idButton}"></i>
                </div>`;
  
  container.insertAdjacentHTML("beforeend", tag);
  searchByfilters(recipes);

  const actionClose = () => { 
    const tagComponent = document.getElementById(idTag);
    tagComponent.remove();
    searchByfilters(recipes);
  };
    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
};

