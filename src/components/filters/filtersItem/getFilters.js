import configFilters from '../configs/filters';

/**
 * Récupérer correctement les filtres
 * Fonction qui récupère la valeur du tag.
 * On créé les types et valeurs des tags
 */
 export const getFilters = () => {
    const container = document.getElementById('selected__tag');
    const filters = [];

    /**
   * On créé le type de tag en reprenant l'objet initialisé dans ./configs/filters
   * @param {*} className
   * @returns
   */
    const getType = (className) => {
        let type = '';
        switch (className) {
        case configFilters.ingredient.tag:
            type = configFilters.ingredient.type;
            break;
        case configFilters.appliance.tag:
            type = configFilters.appliance.type;
            break;
        case configFilters.ustensil.tag:
            type = configFilters.ustensil.type;
            break;
        default:
            type = '';
            break;
        }
        return type;
    };

    /**
   * On créé la valeur du tag
   * @param {*} tag
   * @returns
   */
    const getValue = (tag) => {
        const span = tag.children[0];
        // console.log(span);
        const value = formatText(span.textContent);
        // console.log(value);
        
        return value;
    };
    // container.children = les éléments enfants du container des tags
    for (let i = 0; i < container.children.length; i++) {
        const tag = container.children[i];
        // console.log(tag);
        let filter = { type: getType(tag.className), value: getValue(tag) };
        // console.log(filter);
        filters.push(filter);
    }
    // console.log(filters);
    return filters;
};