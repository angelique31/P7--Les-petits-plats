import searchByfilters from '../../../utils/filter';

/**
 * Fonction qui permet l'affichage d'un tag actif
 */
export const tagsItem = (ingredient, recipes, type, config) => {
    // console.log(config);
    const container = document.getElementById('selected__tag');
    const idTag = `tag-${type}-${ingredient.id}`;
    const idButton = `tag-ingredient-close-${ingredient.id}`;
    const tag = `
        <div id="${idTag}" class="${config.tag}">
            <span>${ingredient.innerHTML}</span>
            <i class="far fa-times-circle" id="${idButton}"></i>
        </div>`;
    container.insertAdjacentHTML('beforeend', tag);
    searchByfilters(recipes);
  
    const actionClose = () => { 
        const tagComponent = document.getElementById(idTag);
        tagComponent.remove();
        searchByfilters(recipes);
    };
    const tagButton = document.getElementById(idButton);
    tagButton.addEventListener('click', actionClose);
};



