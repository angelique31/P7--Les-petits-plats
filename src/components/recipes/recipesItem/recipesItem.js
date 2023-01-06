/**
 * Fonction de la création des cartes des recettes
 * @param {*} recipe 
 * @returns 
 */
function recipesItem (recipe, container){
    const {id, name, ingredients, time, description } = recipe;

    const component =  `
    <article class="recipe" id=${id}>
        <div class="recipe__picture"</div> 
            <img class= recipe__picture--name src="assets/images/${name}.jpg" alt="Photo de ${name}"/>
        <div class="recipe__info">
            <div class="recipe__details">
                <h2 class="recipe__details--title">${name}</h2>
                <span class="recipe__details--time">
                    <img  src="./assets/icons/clock.svg">${time} min
                </span>
            </div>
            <div class=recipe__text>
                <ul class="recipe__text--ingredients">
                ${ingredients
        .map(
            (ingredients) =>
                `
                <li>
                    <strong>${ingredients.ingredient} ${'quantity' in ingredients ? ':' : ''}</strong> ${
    'quantity' in ingredients ? ingredients.quantity : ''
} ${'unit' in ingredients ? ingredients.unit : ''}
                `
        )
        .join('')}</li>
                </ul>
                <p class="recipe__text--description">${description}</p>
            </div>
        </div>
        
    </article>`;
    container.insertAdjacentHTML('beforeEnd', component);
}  

export default recipesItem;

