import { tagsItemAppliance, tagsItemIngredient, tagsItemUstensil } from "../../tags/tagsItem/tagsItem";
/**
 * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients
 */
const filtersItem = (name, container, index, type, recipes) =>{
    const id = `${type}-${index}`;
    const component =  `<li class="${type}" id="${id}">${name}</li>`;
    container.insertAdjacentHTML('beforeEnd', component);
    
    const componentId = document.getElementById(id);
    // console.log(componentId)
    componentId.addEventListener('click', () => {
        tagsItemIngredient(componentId, recipes);
        // tagsItemAppliance(componentId, recipes);
        // tagsItemUstensil(componentId, recipes);
    });
}
export default filtersItem;
