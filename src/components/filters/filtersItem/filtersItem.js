/**
 * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients
 */
const filtersItem = (name, container, index, type) =>{
    const component =  `<li class="${type}" id="${type}-${index}">${name}</li>`;
    container.insertAdjacentHTML('beforeEnd', component);
    // console.log(name, container, index, type);
}
export default filtersItem;
