import { tagsItemAppliance, tagsItemIngredient, tagsItemUstensil } from "../../tags/tagsItem/tagsItem";
/**
 * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients
 */
const filtersItem = (name, container, index, type, recipes, config) =>{
    const id = `${type}-${index}`;
    // console.log(id);
    const component =  `<li class="${type}" id="${id}">${name}</li>`;
    // console.log(component);
    container.insertAdjacentHTML('beforeEnd', component);
    
    const componentId = document.getElementById(id);
    // console.log(componentId)
    componentId.addEventListener('click', () => {
        tagsItemIngredient(componentId, recipes, type, config);

    });
   
}
export default filtersItem;
