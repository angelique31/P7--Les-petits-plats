import filtersItem from "../../filters/filtersItem/filtersItem";
import { sortByIngredient, sortByAppliance, sortByUstensile } from "../../../utils/sort";
import configFilter from "../../../configs/filters";
/**
 *  On boucle sur les 3 filtres (ingredient, appareil et ustensil).
 *  Puis on itère sur un seul filtre
 *  Filtrer les listes des recettes
 */
const filtersList = (recipes) => {
  const filters = [
    {type: 'ingredient',
     container: '#ingredient-list-menu',
     values: sortByIngredient(recipes),
     config: configFilter.ingredient,
    },
    {type: 'appliance',
    container: '#appliance-list-menu',
    values: sortByAppliance(recipes),
    config: configFilter.appliance,
    },
    {type: 'ustensil',
    container: '#ustensil-list-menu',
    values: sortByUstensile(recipes),
    config: configFilter.ustensil,
    },
  ];
  // console.log(filters);
  for (let i = 0; i < filters.length; i++) {
    const filter = filters[i];
    // console.log(filter)
    let container = document.querySelector(filter.container);
    container.innerHTML = '';
    for (let j = 0; j < filter.values.length; j++) {
        filtersItem(filter.values[j], container, j, filter.type, recipes, filter.config);
    // console.log(filter.values[j], container, j, filter.type);   
    }
  }

};
export default filtersList;
