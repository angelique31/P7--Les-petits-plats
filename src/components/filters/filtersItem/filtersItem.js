/**
 * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients
 */
const displayListIngredient = () =>{
    let ingredientListMenu = document.querySelector('#ingredient-list-menu');
    ingredientListMenu.innerHTML = ingredientSort.map((name, index)=>`<li class="ingredient" id="ingredient-${index}">${name}</li>`).join (' ');
    console.log(ingredientListMenu);
    
}
displayListIngredient();
