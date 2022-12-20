import filtersItem from '../../filters/filtersItem/filtersItem';
import { getFilters } from '../../../utils/filter';
import { formatText } from '../../../utils/format';

/**
 *  On boucle sur les 3 filtres (ingredient, appareil et ustensil).
 *  Puis on itère sur un seul filtre
 *  Filtrer les listes des recettes
 */
const filtersColumn = (recipes, filter) => {

    const tags = getFilters();
    const tagsValues = [];

    for (let i = 0; i < tags.length; i++) {
        tagsValues.push(tags[i].value);
    }

    let container = document.querySelector(filter.container);
    container.innerHTML = '';

    for (let j = 0; j < filter.values.length; j++) {
        if (!tagsValues.includes(formatText(filter.values[j]))) {
            filtersItem(filter.values[j], container, j, filter.type, recipes, filter.config);
        }
    }
};
export default filtersColumn;
