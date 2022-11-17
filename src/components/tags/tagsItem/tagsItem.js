import configFilters from '../../../configs/filters';

/**
 * Fonction qui permet l'affichage d'un ingrédient dans un tag
 */
export const ingredientTag = (ingredient) => {
  const container = document.getElementById("container_selected");
  const idTag = `tag-ingredient-${ingredient.id}`;
  const idButton = `tag-ingredient-close-${ingredient.id}`;
  const tag = `
        <div id="${idTag}" class="${configFilters.ingredient.tag}" >
            <span>${ingredient.innerHTML}</span>
            <i class="far fa-times-circle" id="${idButton}"></i>
        </div>`;
  container.insertAdjacentHTML("beforeend", tag);
};
