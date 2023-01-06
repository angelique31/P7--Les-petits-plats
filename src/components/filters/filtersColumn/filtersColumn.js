import filtersItem from '../../filters/filtersItem/filtersItem';
import { getFilters } from '../../../utils/filter';
import { formatText } from '../../../utils/format';

/**
 *  Gère l'affichage des filtres
 */
const filtersColumn = (recipes, filter) => {
    const tags = getFilters();
    const tagsValues = [];

    //on récupère la valeur du tag
    for (let i = 0; i < tags.length; i++) {
        tagsValues.push(tags[i].value);
    }

    let container = document.querySelector(filter.container);
    container.innerHTML = '';

    //on itère sur les valeurs d'un des filtres, puis
    //on insère les valeurs filtrées dans la liste du filtre
    for (let j = 0; j < filter.values.length; j++) {
        //si la valeur du tag est différente de la valeur du filtre, 
        //on affiche la liste filtrée dans le filtre
        if (!tagsValues.includes(formatText(filter.values[j]))) {
            filtersItem(filter.values[j], container, j, filter.type, recipes, filter.config);
        }
    }
};
export default filtersColumn;
