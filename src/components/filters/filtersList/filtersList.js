import filtersColumn from '../filtersColumn/filtersColumn';
import { sortByIngredient, sortByAppliance, sortByUstensile } from '../../../utils/sort';
import configFilter from '../../../configs/filters';

/**
 *  Construit les filtres.
 *  On boucle sur les 3 filtres (les 3 inputs)
 */
const filtersList = (recipes) => {
    const filters = [
        {
            type: 'ingredient',
            container: '#ingredient-list-menu',
            values: sortByIngredient(recipes),
            config: configFilter.ingredient,
        },
        {
            type: 'appliance',
            container: '#appliance-list-menu',
            values: sortByAppliance(recipes),
            config: configFilter.appliance,
        },
        {
            type: 'ustensil',
            container: '#ustensil-list-menu',
            values: sortByUstensile(recipes),
            config: configFilter.ustensil,
        },
    ];

    for (let i = 0; i < filters.length; i++) {
        const filter = filters[i];
        // console.log(filter)
        filtersColumn(recipes, filter);
    }

};
export default filtersList;
