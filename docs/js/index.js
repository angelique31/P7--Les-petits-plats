/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/filters/filtersColumn/filtersColumn.js":
/*!***************************************************************!*\
  !*** ./src/components/filters/filtersColumn/filtersColumn.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters_filtersItem_filtersItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../filters/filtersItem/filtersItem */ \"./src/components/filters/filtersItem/filtersItem.js\");\n/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/filter */ \"./src/utils/filter.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/format */ \"./src/utils/format.js\");\n\r\n\r\n\r\n\r\n/**\r\n *  Gère l'affichage des filtres\r\n */\r\nconst filtersColumn = (recipes, filter) => {\r\n    // console.log(filter)\r\n    const tags = (0,_utils_filter__WEBPACK_IMPORTED_MODULE_1__.getFilters)();\r\n    const tagsValues = [];\r\n\r\n    //on récupère la valeur du tag\r\n    for (let i = 0; i < tags.length; i++) {\r\n        tagsValues.push(tags[i].value);\r\n    }\r\n\r\n    let container = document.querySelector(filter.container);\r\n    container.innerHTML = '';\r\n\r\n    //on itère sur les valeurs d'un des filtres, puis\r\n    //on insère les valeurs filtrées dans la liste du filtre\r\n    for (let j = 0; j < filter.values.length; j++) {\r\n        //si la valeur du tag est différente de la valeur du filtre, \r\n        //on affiche la liste filtrée dans le filtre\r\n        if (!tagsValues.includes((0,_utils_format__WEBPACK_IMPORTED_MODULE_2__.formatText)(filter.values[j]))) {\r\n            (0,_filters_filtersItem_filtersItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filter.values[j], container, j, filter.type, recipes, filter.config);\r\n        }\r\n    }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersColumn);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/filters/filtersColumn/filtersColumn.js?");

/***/ }),

/***/ "./src/components/filters/filtersItem/filtersItem.js":
/*!***********************************************************!*\
  !*** ./src/components/filters/filtersItem/filtersItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tags_tagsItem_tagsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tags/tagsItem/tagsItem */ \"./src/components/tags/tagsItem/tagsItem.js\");\n\r\n/**\r\n * Fonction qui permet l'affichage d'une liste dans un filtre (par ex la liste des ingrédients dans l'input des ingrédients)\r\n */\r\nconst filtersItem = (name, container, index, type, recipes, config) =>{\r\n    const id = `${type}-${index}`;\r\n    const component =  `<li class=\"${type}\" id=\"${id}\">${name}</li>`;\r\n    container.insertAdjacentHTML('beforeEnd', component);\r\n    \r\n    const componentId = document.getElementById(id);\r\n    componentId.addEventListener('click', () => {\r\n        (0,_tags_tagsItem_tagsItem__WEBPACK_IMPORTED_MODULE_0__.tagsItem)(componentId, recipes, type, config);\r\n    });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersItem);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/filters/filtersItem/filtersItem.js?");

/***/ }),

/***/ "./src/components/filters/filtersList/filtersList.js":
/*!***********************************************************!*\
  !*** ./src/components/filters/filtersList/filtersList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filtersColumn_filtersColumn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filtersColumn/filtersColumn */ \"./src/components/filters/filtersColumn/filtersColumn.js\");\n/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/sort */ \"./src/utils/sort.js\");\n/* harmony import */ var _configs_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configs/filters */ \"./src/configs/filters.js\");\n\r\n\r\n\r\n\r\n/**\r\n *  Construit les filtres.\r\n *  On boucle sur les 3 filtres (les 3 inputs)\r\n */\r\nconst filtersList = (recipes) => {\r\n    const filters = [\r\n        {\r\n          type: 'ingredient',\r\n          container: '#ingredient-list-menu',\r\n          values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByIngredient)(recipes),\r\n          config: _configs_filters__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ingredient,\r\n        },\r\n        {\r\n          type: 'appliance',\r\n          container: '#appliance-list-menu',\r\n          values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByAppliance)(recipes),\r\n          config: _configs_filters__WEBPACK_IMPORTED_MODULE_2__[\"default\"].appliance,\r\n        },\r\n        {\r\n          type: 'ustensil',\r\n          container: '#ustensil-list-menu',\r\n          values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByUstensile)(recipes),\r\n          config: _configs_filters__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ustensil,\r\n        },\r\n    ];\r\n\r\n    for (let i = 0; i < filters.length; i++) {\r\n        const filter = filters[i];\r\n        // console.log(filter)\r\n        (0,_filtersColumn_filtersColumn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipes, filter);\r\n    }\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersList);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/filters/filtersList/filtersList.js?");

/***/ }),

/***/ "./src/components/recipes/index.js":
/*!*****************************************!*\
  !*** ./src/components/recipes/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipesList_recipesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipesList/recipesList */ \"./src/components/recipes/recipesList/recipesList.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_recipesList_recipesList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://les-petits-plats/./src/components/recipes/index.js?");

/***/ }),

/***/ "./src/components/recipes/recipesItem/recipesItem.js":
/*!***********************************************************!*\
  !*** ./src/components/recipes/recipesItem/recipesItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Fonction de la création des cartes des recettes\r\n * @param {*} recipe \r\n * @returns \r\n */\r\nfunction recipesItem (recipe, container){\r\n    const {id, name, ingredients, time, description } = recipe;\r\n\r\n    const component =  `\r\n    <article class=\"recipe\" id=${id}>\r\n        <div class=\"recipe__picture\"</div> \r\n            <img class= recipe__picture--name src=\"assets/images/${name}.jpg\" alt=\"Photo de ${name}\"/>\r\n        <div class=\"recipe__info\">\r\n            <div class=\"recipe__details\">\r\n                <h2 class=\"recipe__details--title\">${name}</h2>\r\n                <span class=\"recipe__details--time\">\r\n                    <img  src=\"./assets/icons/clock.svg\">${time} min\r\n                </span>\r\n            </div>\r\n            <div class=recipe__text>\r\n                <ul class=\"recipe__text--ingredients\">\r\n                ${ingredients\r\n        .map(\r\n            (ingredients) =>\r\n                `\r\n                <li>\r\n                    <strong>${ingredients.ingredient} :</strong> ${\r\n    'quantity' in ingredients ? ingredients.quantity : ''\r\n} ${'unit' in ingredients ? ingredients.unit : ''}\r\n                `\r\n        )\r\n        .join('')}</li>\r\n                </ul>\r\n                <p class=\"recipe__text--description\">${description}</p>\r\n            </div>\r\n        </div>\r\n        \r\n    </article>`;\r\n    container.insertAdjacentHTML('beforeEnd', component);\r\n}  \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesItem);\r\n\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/recipes/recipesItem/recipesItem.js?");

/***/ }),

/***/ "./src/components/recipes/recipesList/recipesList.js":
/*!***********************************************************!*\
  !*** ./src/components/recipes/recipesList/recipesList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipesItem_recipesItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipesItem/recipesItem */ \"./src/components/recipes/recipesItem/recipesItem.js\");\n/* harmony import */ var _recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipesNotFound/recipesNotFound */ \"./src/components/recipes/recipesNotFound/recipesNotFound.js\");\n\r\n\r\n\r\n/**\r\n * Fonction qui gère l'affichage des cartes des recettes\r\n * @param {*} recipes \r\n */\r\n function recipesList(recipes){\r\n    const container = document.querySelector('.recipe__section');\r\n    container.innerHTML = '';\r\n    const isEmpty = recipes && !recipes[0];\r\n\r\n    if (isEmpty) {\r\n        (0,_recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\r\n       \r\n    } else {\r\n        (0,_recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\r\n        recipes.forEach((recipe) => {\r\n            (0,_recipesItem_recipesItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipe, container);   \r\n        });\r\n    }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesList);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/recipes/recipesList/recipesList.js?");

/***/ }),

/***/ "./src/components/recipes/recipesNotFound/recipesNotFound.js":
/*!*******************************************************************!*\
  !*** ./src/components/recipes/recipesNotFound/recipesNotFound.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Message d'erreur  \r\n * @param {*} recipes \r\n */\r\n function recipesNotFound(show){\r\n    const component = document.getElementById('no-result');\r\n\r\n    if (show){\r\n        component.style.display = 'block';\r\n    } else {\r\n        component.style.display = 'none';\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesNotFound);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/recipes/recipesNotFound/recipesNotFound.js?");

/***/ }),

/***/ "./src/components/search/search.js":
/*!*****************************************!*\
  !*** ./src/components/search/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipes */ \"./src/components/recipes/index.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format */ \"./src/utils/format.js\");\n/* harmony import */ var _filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/filtersList/filtersList */ \"./src/components/filters/filtersList/filtersList.js\");\n\r\n\r\n\r\n\r\nlet searchInput = document.querySelector(\"#search_input\");\r\n\r\n/**\r\n * Fonction qui filtre les cartes en fonction de ce qui est tapé dan la barre de recherche\r\n * @param {*} recipes\r\n */\r\n// function search (recipes) {\r\n//     let result = [];\r\n//     const filterData = (e) => {\r\n//         const inputLetters = formatText(e.target.value);\r\n//         if (inputLetters.length > 2 ) {\r\n//             const filterIngredients = (ingredients) => {\r\n//                 // console.log(ingredients)\r\n//                 return ingredients.find(item => formatText(item.ingredient).includes(inputLetters));\r\n//             };\r\n//             result = recipes.filter(recipe => {\r\n//                 const formatedRecipe = {\r\n//                     name: formatText(recipe.name),\r\n//                     ingredients: recipe.ingredients,\r\n//                     description: formatText(recipe.description),\r\n//                 };\r\n\r\n//                 const match = formatedRecipe.name.includes(inputLetters)\r\n//     || filterIngredients(formatedRecipe.ingredients)\r\n//     || formatedRecipe.description.includes(inputLetters);\r\n\r\n//                 return match;\r\n\r\n//             });\r\n//             // console.log(result);\r\n\r\n//             displayRecipes(result); //fonction appelée qui permet le tri des cartes des recettes\r\n//             filtersList(result);\r\n//         }\r\n\r\n//         if(inputLetters.length === 0 ) {\r\n//             displayRecipes(recipes); //fonction appelée qui permet le tri des cartes des recettes\r\n//             filtersList(recipes);\r\n//         }\r\n\r\n//     };\r\n//     searchInput.addEventListener('input', filterData);\r\n// }\r\n\r\n// export default search;\r\n\r\n// 2e cas avec une boucle for :\r\n\r\nfunction search(recipes) {\r\n  // console.log(recipes);\r\n  let recipesArray = [];\r\n  const filterData = (e) => {\r\n    const inputLetters = (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(e.target.value);\r\n    if (inputLetters.length > 2) {\r\n      for (let i = 0; i < recipes.length; i++) {\r\n        // console.log(recipes[i])\r\n        if ((0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipes[i].name).includes(inputLetters) ||\r\n            (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipes[i].description).includes(inputLetters)) {\r\n                recipesArray.push(recipes[i]);\r\n        } else {\r\n          for (let j = 0; j < recipes[i].ingredients.length; j++) {\r\n            if ((0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipes[i].ingredients[j].ingredient).includes(inputLetters)) {\r\n                recipesArray.push(recipes[i]);\r\n            }\r\n          }\r\n        }\r\n        console.log(recipesArray);\r\n      }\r\n\r\n      return recipesArray;\r\n    }\r\n    (0,_recipes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipesArray); //fonction appelée qui permet le tri des cartes des recettes\r\n    (0,_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(recipesArray);\r\n  };\r\n  searchInput.addEventListener(\"input\", filterData);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/search/search.js?");

/***/ }),

/***/ "./src/components/tags/tagsInput/tagsInput.js":
/*!****************************************************!*\
  !*** ./src/components/tags/tagsInput/tagsInput.js ***!
  \****************************************************/
/***/ (() => {

eval("// Les inputs ingrédients, appareils et ustensiles\r\nconst ingredient = document.querySelector('#ingredient_button');\r\nconst appliance = document.querySelector('#appliance_button');\r\nconst ustensils = document.querySelector('#ustensil_button');\r\n\r\n\r\n//Les inputs ouverts au clic avec placeholder \"Rechercher un ingrédient\"\r\nconst ingredientList = document.querySelector('#ingredient-list');\r\nconst appliancetList = document.querySelector('#appliance-list');\r\nconst ustensilList = document.querySelector('#ustensil-list');\r\n\r\n//La liste des ingrédients, appareils, et ustensiles\r\nconst ingredientListMenu = document.querySelector('#ingredient-list-menu');\r\nconst applianceListMenu = document.querySelector('#appliance-list-menu');\r\nconst ustensilListMenu = document.querySelector('#ustensil-list-menu');\r\n\r\n//Les chevrons\r\nconst chevronDownIngredient = document.querySelector('#chevron-down-ingredient');\r\nconst chevronDownAppliance = document.querySelector('#chevron-down-appliance');\r\nconst chevronDownUstensils = document.querySelector('#chevron-down-ustensils');\r\nconst chevronUpIngredient = document.querySelector('#chevron-up-ingredient');\r\nconst chevronUpAppliance = document.querySelector('#chevron-up-appliance');\r\nconst chevronUpUstensils = document.querySelector('#chevron-up-ustensils');\r\n\r\n/**************Ouverture des inputs au clic *************/\r\n\r\n/**\r\n * Ouverture de l'input ingrédient au clic\r\n */\r\nconst openInputIngredient =  () => {\r\n    ingredient.style.display = 'none';\r\n    ingredientList.style.display = 'block';\r\n    ingredientListMenu.style.display = 'block';\r\n    chevronUpIngredient.style.display = 'block';\r\n    chevronDownIngredient.style.display = 'none';\r\n};\r\ningredient.addEventListener ('click', openInputIngredient);\r\n\r\n/**\r\n * Ouverture de l'input appareil au clic\r\n */\r\nconst openInputAppliance = () => {\r\n    appliance.style.display = 'none';\r\n    appliancetList.style.display = 'block';\r\n    applianceListMenu.style.display = 'block';\r\n    chevronUpAppliance.style.display = 'block';\r\n    chevronDownAppliance.style.display = 'none';\r\n};\r\nappliance.addEventListener ('click', openInputAppliance);\r\n\r\n/**\r\n * Ouverture de l'input ustensiles au clic\r\n */\r\nconst openInputUstensil = () => {\r\n    ustensils.style.display = 'none';\r\n    ustensilList.style.display = 'block';\r\n    ustensilListMenu.style.display = 'block';\r\n    chevronUpUstensils.style.display = 'block';\r\n    chevronDownUstensils.style.display = 'none';\r\n};\r\nustensils.addEventListener ('click', openInputUstensil);\r\n\r\n/**************Fermeture des inputs au clic sur le chevron up *************/\r\n\r\n/**\r\n * Fermeture de l'input ingrédient au clic sur le chevron up\r\n */\r\nconst closeInputIngredient = () => {\r\n    ingredient.style.display = 'flex';\r\n    ingredientList.style.display = 'none';\r\n    ingredientListMenu.style.display = 'none';\r\n    chevronUpIngredient.style.display = 'none';\r\n    chevronDownIngredient.style.display = 'block';\r\n};\r\n\r\nchevronUpIngredient.addEventListener ('click', closeInputIngredient);\r\n\r\n/**\r\n * Fermeture de l'input appliance au clic sur le chevron up\r\n */\r\nconst closeInputAppliance = () => {\r\n    appliance.style.display = 'flex';\r\n    appliancetList.style.display = 'none';\r\n    applianceListMenu.style.display = 'none';\r\n    chevronUpAppliance.style.display = 'none';\r\n    chevronDownAppliance.style.display = 'block';\r\n};\r\nchevronUpAppliance.addEventListener ('click', closeInputAppliance);\r\n\r\n/**\r\n * Fermeture de l'input ustensiles au clic sur le chevron up\r\n */\r\nconst closeInputUstensils = () => {\r\n    ustensils.style.display = 'flex';\r\n    ustensilList.style.display = 'none';\r\n    ustensilListMenu.style.display = 'none';\r\n    chevronUpUstensils.style.display = 'none';\r\n    chevronDownUstensils.style.display = 'block';\r\n};\r\n\r\nchevronUpUstensils.addEventListener ('click', closeInputUstensils);\r\n\r\n\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/tags/tagsInput/tagsInput.js?");

/***/ }),

/***/ "./src/components/tags/tagsItem/tagsItem.js":
/*!**************************************************!*\
  !*** ./src/components/tags/tagsItem/tagsItem.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagsItem\": () => (/* binding */ tagsItem)\n/* harmony export */ });\n/* harmony import */ var _utils_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/filter */ \"./src/utils/filter.js\");\n\r\n\r\n/**\r\n * Fonction qui permet l'affichage d'un ingrédient dans un tag\r\n */\r\nconst tagsItem = (ingredient, recipes, type, config) => {\r\n  // console.log(config);\r\n  const container = document.getElementById('selected__tag');\r\n  const idTag = `tag-${type}-${ingredient.id}`;\r\n  const idButton = `tag-ingredient-close-${ingredient.id}`;\r\n  const tag = `\r\n        <div id=\"${idTag}\" class=\"${config.tag}\">\r\n            <span>${ingredient.innerHTML}</span>\r\n            <i class=\"far fa-times-circle\" id=\"${idButton}\"></i>\r\n        </div>`;\r\n  container.insertAdjacentHTML(\"beforeend\", tag);\r\n  (0,_utils_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipes);\r\n  \r\n  const actionClose = () => { \r\n    const tagComponent = document.getElementById(idTag);\r\n    tagComponent.remove();\r\n    (0,_utils_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipes);\r\n  };\r\n    const tagButton = document.getElementById(idButton);\r\n    tagButton.addEventListener('click', actionClose);\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/tags/tagsItem/tagsItem.js?");

/***/ }),

/***/ "./src/configs/data.js":
/*!*****************************!*\
  !*** ./src/configs/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    url: './data/recipes.json', \r\n    medias : 'assets/images'\r\n});\n\n//# sourceURL=webpack://les-petits-plats/./src/configs/data.js?");

/***/ }),

/***/ "./src/configs/filters.js":
/*!********************************!*\
  !*** ./src/configs/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * J'initialise les données des filtres en créant un objet\r\n */\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    ingredient : {\r\n        tag : 'selected_tag_input_ingredient',\r\n        type : 'ingredient'\r\n    },\r\n    appliance : {\r\n        tag : 'selected_tag_input_appliance',\r\n        type : 'appliance'\r\n    },\r\n    ustensil : {\r\n        tag : 'selected_tag_input_ustensil',\r\n        type : 'ustensil'\r\n    },\r\n});\r\n\r\n\r\n  \n\n//# sourceURL=webpack://les-petits-plats/./src/configs/filters.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/filters/filtersList/filtersList */ \"./src/components/filters/filtersList/filtersList.js\");\n/* harmony import */ var _components_tags_tagsInput_tagsInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tags/tagsInput/tagsInput */ \"./src/components/tags/tagsInput/tagsInput.js\");\n/* harmony import */ var _components_tags_tagsInput_tagsInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tags_tagsInput_tagsInput__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/search */ \"./src/utils/search.js\");\n/* harmony import */ var _components_recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/recipes */ \"./src/components/recipes/index.js\");\n/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search/search */ \"./src/components/search/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function init() {\r\n  const { recipes } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getRecipes)();\r\n\r\n  (0,_components_recipes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(recipes);\r\n  (0,_components_search_search__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(recipes);\r\n  (0,_components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(recipes);\r\n\r\n  (0,_utils_search__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(recipes);\r\n}\r\ninit();\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecipes\": () => (/* binding */ getRecipes)\n/* harmony export */ });\n/* harmony import */ var _configs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/data */ \"./src/configs/data.js\");\n\r\n\r\n\r\nasync function getRecipes() {\r\n    return fetch(_configs_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url)\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            // console.log(datas);\r\n            return datas;\r\n        });\r\n}\r\n \n\n//# sourceURL=webpack://les-petits-plats/./src/utils/api.js?");

/***/ }),

/***/ "./src/utils/filter.js":
/*!*****************************!*\
  !*** ./src/utils/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getFilters\": () => (/* binding */ getFilters),\n/* harmony export */   \"getRecipes\": () => (/* binding */ getRecipes)\n/* harmony export */ });\n/* harmony import */ var _configs_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/filters */ \"./src/configs/filters.js\");\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format */ \"./src/utils/format.js\");\n/* harmony import */ var _components_recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/recipes */ \"./src/components/recipes/index.js\");\n/* harmony import */ var _components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/filters/filtersList/filtersList */ \"./src/components/filters/filtersList/filtersList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Fonction qui récupère la valeur du tag.\r\n * On créé les types et valeurs des tags\r\n */\r\nconst getFilters = () => {\r\n    const container = document.getElementById('selected__tag');\r\n    const filters = [];\r\n\r\n    /**\r\n   * On créé le type de tag en reprenant l'objet initialisé dans ./configs/filters\r\n   * @param {*} className\r\n   * @returns\r\n   */\r\n    const getType = (className) => {\r\n        let type = '';\r\n        switch (className) {\r\n        case _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ingredient.tag:\r\n            type = _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ingredient.type;\r\n            break;\r\n        case _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appliance.tag:\r\n            type = _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appliance.type;\r\n            break;\r\n        case _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ustensil.tag:\r\n            type = _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ustensil.type;\r\n            break;\r\n        default:\r\n            type = '';\r\n            break;\r\n        }\r\n        return type;\r\n    };\r\n\r\n    /**\r\n   * On créé la valeur du tag\r\n   * @param {*} tag\r\n   * @returns\r\n   */\r\n    const getValue = (tag) => {\r\n        const span = tag.children[0];\r\n        const value = (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(span.textContent);\r\n        return value;\r\n    };\r\n    // container.children = les éléments enfants du container des tags\r\n    for (let i = 0; i < container.children.length; i++) {\r\n        const tag = container.children[i];\r\n        let filter = { type: getType(tag.className), value: getValue(tag) };\r\n        filters.push(filter);\r\n    }\r\n    // console.log(filters);\r\n    return filters;\r\n};\r\n\r\n\r\n/**\r\n * Tri les recettes en fonction des filtres (des tags)\r\n * @param {array} recipes\r\n * @param {array} filters\r\n * @return recettes filtrées\r\n */\r\nconst getRecipes = (recipes, filters) => {\r\n    // console.log(filters);\r\n    let result = [];\r\n\r\n    const filterIngredients = (ingredients, value) => {\r\n        return ingredients.find((item) =>\r\n            (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(item.ingredient).includes(value)\r\n        );\r\n    };\r\n\r\n    const search = (value) => recipes.filter((recipe) => {\r\n        const formatedRecipe = {\r\n            name: (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipe.name),\r\n            ingredients: recipe.ingredients,\r\n            description: (0,_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipe.description),\r\n        };\r\n       \r\n        const match =\r\n      formatedRecipe.name.includes(value) ||\r\n      filterIngredients(formatedRecipe.ingredients, value) ||\r\n      formatedRecipe.description.includes(value);\r\n\r\n        return match;\r\n    });\r\n    \r\n  \r\n    for (let i = 0; i < filters.length; i++) {\r\n        // console.log(filters);\r\n        const value = filters[i].value;\r\n        // console.log(value);\r\n        const match = search (value);\r\n        // console.log(match);\r\n        if (match && match[0]) {\r\n            result = result.concat(match);\r\n        } \r\n        // console.log(result);\r\n    }\r\n    \r\n    const resultSort = [...new Set(result)].sort();\r\n    // console.log(resultSort);\r\n    return resultSort;\r\n};\r\n\r\n\r\n\r\n/**\r\n * Gère l'affichage des recettes filtrées\r\n * @param {array} recipes\r\n */\r\nconst searchByfilters = (recipes) => {\r\n    //récupère les tags :\r\n    const filters = getFilters();\r\n    if (filters.length === 0) {\r\n        (0,_components_recipes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(recipes);\r\n        (0,_components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(recipes);\r\n    } else {\r\n        const recipesFilters = getRecipes(recipes, filters);\r\n        // console.log(recipesFilters)\r\n        (0,_components_recipes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(recipesFilters);\r\n        (0,_components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(recipesFilters);\r\n    } \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchByfilters);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/utils/filter.js?");

/***/ }),

/***/ "./src/utils/format.js":
/*!*****************************!*\
  !*** ./src/utils/format.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatText\": () => (/* binding */ formatText)\n/* harmony export */ });\nfunction formatText (text) {\r\n    // console.log(text);\r\n    return text.toLowerCase()\r\n        .trim()\r\n        .normalize('NFD')\r\n        .replace(/[\\u0300-\\u036f]/g, '')\r\n        .replace(/\\s/g,'');\r\n    // toLowerCase() : mettre en minuscule, \r\n    // trim() : gérer les espaces avant et après le string,\r\n    // normalize('NFD').replace(/[\\u0300-\\u036f]/g, '') : nettoyer les accents,\r\n    // replace(/\\s/g,'') : enlever les espaces entre chaque string,\r\n    //Par ex taper creme fraiche qui a un espace entre les 2 mots\r\n}\n\n//# sourceURL=webpack://les-petits-plats/./src/utils/format.js?");

/***/ }),

/***/ "./src/utils/search.js":
/*!*****************************!*\
  !*** ./src/utils/search.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _configs_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/filters */ \"./src/configs/filters.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format */ \"./src/utils/format.js\");\n/* harmony import */ var _components_filters_filtersColumn_filtersColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/filters/filtersColumn/filtersColumn */ \"./src/components/filters/filtersColumn/filtersColumn.js\");\n\r\n\r\n\r\n\r\nconst inputSearchIngredient = document.querySelector('.ingredient-list');\r\n/**\r\n * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient\r\n * @param {*} recipes \r\n */\r\nconst searchButtonsInput = (recipes) => {\r\n    const filterDataInput = (e) => {\r\n        const lettersInput = (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(e.target.value);\r\n            if (lettersInput.length >= 1) {\r\n            /**\r\n             * Construit la liste brute des ingrédients\r\n             * @param {array} array (les 50 recettes)\r\n             */\r\n            const getIngredientsList = (array) => {\r\n                // console.log(array);\r\n                const result = [];\r\n                for (let i = 0; i < array.length; i++) {\r\n                    //on boucle sur les 50 recettes\r\n                    // console.log(array[i])\r\n                    const ingredients = array[i].ingredients;\r\n                    // console.log(ingredients)\r\n                    for (let j = 0; j < ingredients.length; j++) {\r\n                        result.push(ingredients[j].ingredient);\r\n                        // console.log(result);\r\n                    }\r\n                }\r\n                return result;\r\n            };\r\n\r\n            /**\r\n             * Supprime les ingrédients duppliqués\r\n             * @param {array} array \r\n             * @returns \r\n             */\r\n            const getIngredientsSort = (array) => {\r\n                return [...new Set(array)].sort();\r\n            };\r\n\r\n            const getIngredientFilter = (array, input) => {\r\n                // console.log(array, input)\r\n                const result = [];\r\n                //on boucle sur les ingrédients triés (sans doublons)\r\n                for (let i = 0; i < array.length; i++) {\r\n                    // console.log(array[i])\r\n                    //Si la valeur du filtre (ici un ingrédient) correspond à ce que l'on tape dans l'input,\r\n                    //on affiche le résultat  \r\n                    if ((0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(array[i]).includes(input)) {\r\n                        result.push(array[i]);\r\n                        // console.log(result);\r\n                    }\r\n                }\r\n                return result;\r\n            };\r\n\r\n            // La liste de tous les ingrédients\r\n            const ingredientsList = getIngredientsList(recipes);\r\n            // La liste des ingrédients triés (sans doublons)\r\n            const ingredientReduce = getIngredientsSort(ingredientsList);\r\n            // correspondance entre les ingrédients triés et ce que l'on tape dans l'input\r\n            const match = getIngredientFilter(ingredientReduce, lettersInput);\r\n            // console.log(match);\r\n            const filter = {\r\n                type: 'ingredient',\r\n                container: '#ingredient-list-menu',\r\n                values: match,\r\n                config: _configs_filters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ingredient,\r\n            };\r\n            // console.log(filter);\r\n            (0,_components_filters_filtersColumn_filtersColumn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(recipes, filter);            \r\n        }\r\n    };\r\n    inputSearchIngredient.addEventListener('input', filterDataInput);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchButtonsInput);\n\n//# sourceURL=webpack://les-petits-plats/./src/utils/search.js?");

/***/ }),

/***/ "./src/utils/sort.js":
/*!***************************!*\
  !*** ./src/utils/sort.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortByAppliance\": () => (/* binding */ sortByAppliance),\n/* harmony export */   \"sortByIngredient\": () => (/* binding */ sortByIngredient),\n/* harmony export */   \"sortByUstensile\": () => (/* binding */ sortByUstensile)\n/* harmony export */ });\n\r\n/**\r\n * Trier les ingrédients en enlevant les doublons\r\n * @param {*} recipes \r\n * @returns - un tableau d'ingrédients triés (sans doublons)\r\n */\r\nconst sortByIngredient = (recipes) => {\r\n  let data = [];\r\n\r\n  recipes.forEach((recipe) => {\r\n    recipe.ingredients.forEach((ingredient) => {\r\n      if (ingredient.ingredient) {\r\n        data.push(ingredient.ingredient);\r\n      }\r\n    });\r\n  });\r\n  // console.log(data);\r\n  //New set pour enlever les doublons\r\n  let ingredientSort = [...new Set(data)].sort();\r\n  // console.log(ingredientSort);\r\n  return ingredientSort;\r\n};\r\n\r\n/**\r\n * Trier les appareils en enlevant les doublons\r\n * @param {*} recipes \r\n * @returns un tableau d'appareils triés (sans doublons)\r\n */\r\nconst sortByAppliance = (recipes) => {\r\n    let data = [];\r\n  \r\n    for (let i = 0; i < recipes.length; i++) {\r\n        if(recipes[i].appliance){\r\n            data.push(recipes[i].appliance);\r\n        }\r\n    }\r\n    let applianceSort = [...new Set(data)].sort();\r\n    return applianceSort;\r\n  };\r\n  \r\n  /**\r\n * Trier les ustensils en enlevant les doublons\r\n * @param {*} recipes \r\n * @returns un tableau d'ustensils triés (sans doublons)\r\n */\r\n  const sortByUstensile = (recipes) => {\r\n    let data = [];\r\n  \r\n    recipes.forEach((recipe) => {\r\n        recipe.ustensils.forEach((ustensil) => {\r\n            if(ustensil){\r\n                data.push(ustensil);\r\n            }\r\n        });\r\n    });\r\n    let ustensileSort = [...new Set(data)].sort();\r\n    return ustensileSort;\r\n  };\n\n//# sourceURL=webpack://les-petits-plats/./src/utils/sort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;