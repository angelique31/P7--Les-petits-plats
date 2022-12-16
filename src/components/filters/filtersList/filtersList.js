import filtersItem from "../../filters/filtersItem/filtersItem";
import { sortByIngredient, sortByAppliance, sortByUstensile } from "../../../utils/sort";
import configFilter from "../../../configs/filters";
import { getFilters } from "../../../utils/filter";
import { formatText } from "../../../utils/format";
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
  const tags = getFilters();
  // console.log(tags);
  const tagsValues = []; //Récupère la valeur du tag 
  
  for (let i = 0; i < tags.length; i++) {
    tagsValues.push(tags[i].value);
  }
  // console.log(tagsValues)
  for (let i = 0; i < filters.length; i++) {
    const filter = filters[i];
    // console.log(filter)
    let container = document.querySelector(filter.container);
    container.innerHTML = '';
    for (let j = 0; j < filter.values.length; j++) {
        if(!tagsValues.includes(formatText(filter.values[j]))) {
          // console.log(filter.values[j]);
          filtersItem(filter.values[j], container, j, filter.type, recipes, filter.config);
        }
        
    }
  }

};
export default filtersList;
