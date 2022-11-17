/**
 * Message d'erreur  
 * @param {*} recipes 
 */
 function recipesNotFound(show){
    const component = document.getElementById('no-result');

    if (show){
        component.style.display = 'block';
    } else {
        component.style.display = 'none';
    }
}
export default recipesNotFound;
