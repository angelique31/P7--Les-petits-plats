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

/***/ "./src/components/filters/filtersItem/filtersItem.js":
/*!***********************************************************!*\
  !*** ./src/components/filters/filtersItem/filtersItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Fonction qui permet l'affichage de la liste des ingrédients dans le filtre des ingrédients\r\n */\r\nconst filtersItem = (name, container, index, type) =>{\r\n    const component =  `<li class=\"${type}\" id=\"${type}-${index}\">${name}</li>`;\r\n    container.insertAdjacentHTML('beforeEnd', component);\r\n    // console.log(name, container, index, type);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersItem);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/filters/filtersItem/filtersItem.js?");

/***/ }),

/***/ "./src/components/filters/filtersList/filtersList.js":
/*!***********************************************************!*\
  !*** ./src/components/filters/filtersList/filtersList.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filters_filtersItem_filtersItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../filters/filtersItem/filtersItem */ \"./src/components/filters/filtersItem/filtersItem.js\");\n/* harmony import */ var _utils_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/sort */ \"./src/utils/sort.js\");\n\r\n\r\n\r\n/**\r\n *  On boucle sur les 3 filtres (ingredient, appareil et ustensil).\r\n *  Puis on itère sur un seul filtre\r\n *  Filtrer les listes des recettes\r\n */\r\nconst filtersList = (recipes) => {\r\n  const filters = [\r\n    {type: 'ingredient',\r\n     container: '#ingredient-list-menu',\r\n     values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByIngredient)(recipes),\r\n    },\r\n    {type: 'appliance',\r\n    container: '#appliance-list-menu',\r\n    values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByAppliance)(recipes),\r\n    },\r\n    {type: 'ustensil',\r\n    container: '#ustensil-list-menu',\r\n    values: (0,_utils_sort__WEBPACK_IMPORTED_MODULE_1__.sortByUstensile)(recipes),\r\n    },\r\n  ];\r\n  // console.log(filters);\r\n  for (let i = 0; i < filters.length; i++) {\r\n    const filter = filters[i];\r\n    // console.log(filter)\r\n    let container = document.querySelector(filter.container);\r\n    for (let j = 0; j < filter.values.length; j++) {\r\n        (0,_filters_filtersItem_filtersItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filter.values[j], container, j, filter.type);\r\n    // console.log(filter.values[j], container, j, filter.type);   \r\n    }\r\n  }\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersList);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/filters/filtersList/filtersList.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipesItem_recipesItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipesItem/recipesItem */ \"./src/components/recipes/recipesItem/recipesItem.js\");\n/* harmony import */ var _recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipesNotFound/recipesNotFound */ \"./src/components/recipes/recipesNotFound/recipesNotFound.js\");\n\r\n\r\n\r\n/**\r\n * Fonction qui permet l'affichage des cartes  \r\n * @param {*} recipes \r\n */\r\n function recipesList(recipes){\r\n    const container = document.querySelector('.recipe__section');\r\n    container.innerHTML = '';\r\n    const isEmpty = recipes && !recipes[0];\r\n\r\n    if (isEmpty) {\r\n        (0,_recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\r\n       \r\n    } else {\r\n        (0,_recipesNotFound_recipesNotFound__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false);\r\n        recipes.forEach((recipe) => {\r\n            (0,_recipesItem_recipesItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recipe, container);   \r\n        });\r\n    }\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesList);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/recipes/recipesList/recipesList.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipes */ \"./src/components/recipes/index.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format */ \"./src/utils/format.js\");\n\r\n\r\n\r\nlet searchInput = document.querySelector('#search_input');\r\n\r\n/**\r\n * Fonction qui filtre les cartes en fonction de ce qui est tapé dan la barre de recherche\r\n * @param {*} recipes \r\n */\r\nfunction search (recipes) {\r\n    let result = [];\r\n    const filterData = (e) => {\r\n        const inputLetters = (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(e.target.value);\r\n        // console.log(inputLetters);\r\n        if (inputLetters.length > 2 ) {\r\n            const filterIngredients = (ingredients) => {\r\n                return ingredients.find(item => (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(item.ingredient).includes(inputLetters));\r\n            };\r\n\r\n            result = recipes.filter(recipe => {\r\n                const formatedRecipe = {\r\n                    name: (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipe.name),\r\n                    ingredients: recipe.ingredients,\r\n                    description: (0,_utils_format__WEBPACK_IMPORTED_MODULE_1__.formatText)(recipe.description),\r\n                };\r\n                \r\n                const match = formatedRecipe.name.includes(inputLetters)\r\n    || filterIngredients(formatedRecipe.ingredients)\r\n    || formatedRecipe.description.includes(inputLetters);\r\n    \r\n                return match;\r\n                \r\n            });\r\n            // console.log(result);\r\n \r\n            \r\n            (0,_recipes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result); //fonction appelée qui permet le tri des cartes des recettes    \r\n        } \r\n       \r\n    };\r\n    searchInput.addEventListener('input', filterData);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/search/search.js?");

/***/ }),

/***/ "./src/components/tagsInput.js":
/*!*************************************!*\
  !*** ./src/components/tagsInput.js ***!
  \*************************************/
/***/ (() => {

eval("// Les inputs ingrédients, appareils et ustensiles\r\nconst ingredient = document.querySelector('#ingredient_button');\r\nconst appliance = document.querySelector('#appliance_button');\r\nconst ustensils = document.querySelector('#ustensil_button');\r\n\r\n\r\n//Les inputs ouverts au clic avec placeholder \"Rechercher un ingrédient\"\r\nconst ingredientList = document.querySelector('#ingredient-list');\r\nconst appliancetList = document.querySelector('#appliance-list');\r\nconst ustensilList = document.querySelector('#ustensil-list');\r\n\r\n//La liste des ingrédients, appareils, et ustensiles\r\nconst ingredientListMenu = document.querySelector('#ingredient-list-menu');\r\nconst applianceListMenu = document.querySelector('#appliance-list-menu');\r\nconst ustensilListMenu = document.querySelector('#ustensil-list-menu');\r\n\r\n//Les chevrons\r\nconst chevronDownIngredient = document.querySelector('#chevron-down-ingredient');\r\nconst chevronDownAppliance = document.querySelector('#chevron-down-appliance');\r\nconst chevronDownUstensils = document.querySelector('#chevron-down-ustensils');\r\nconst chevronUpIngredient = document.querySelector('#chevron-up-ingredient');\r\nconst chevronUpAppliance = document.querySelector('#chevron-up-appliance');\r\nconst chevronUpUstensils = document.querySelector('#chevron-up-ustensils');\r\n\r\n/**************Ouverture des inputs au clic *************/\r\n\r\n/**\r\n * Ouverture de l'input ingrédient au clic\r\n */\r\nconst openInputIngredient =  () => {\r\n    ingredient.style.display = 'none';\r\n    ingredientList.style.display = 'block';\r\n    ingredientListMenu.style.display = 'block';\r\n    chevronUpIngredient.style.display = 'block';\r\n    chevronDownIngredient.style.display = 'none';\r\n    // ingredient.style.width = ingredientList.style.width;\r\n};\r\ningredient.addEventListener ('click', openInputIngredient);\r\n\r\n/**\r\n * Ouverture de l'input appareil au clic\r\n */\r\nconst openInputAppliance = () => {\r\n    appliance.style.display = 'none';\r\n    appliancetList.style.display = 'block';\r\n    applianceListMenu.style.display = 'block';\r\n    chevronUpAppliance.style.display = 'block';\r\n    chevronDownAppliance.style.display = 'none';\r\n    // appliance.style.width = appliancetList.style.width;\r\n};\r\nappliance.addEventListener ('click', openInputAppliance);\r\n\r\n/**\r\n * Ouverture de l'input ustensiles au clic\r\n */\r\nconst openInputUstensil = () => {\r\n    ustensils.style.display = 'none';\r\n    ustensilList.style.display = 'block';\r\n    ustensilListMenu.style.display = 'block';\r\n    chevronUpUstensils.style.display = 'block';\r\n    chevronDownUstensils.style.display = 'none';\r\n    // inputUstensilList.style.display = 'block';\r\n};\r\nustensils.addEventListener ('click', openInputUstensil);\r\n\r\n/**************Fermeture des inputs au clic sur le chevron up *************/\r\n\r\n/**\r\n * Fermeture de l'input ingrédient au clic sur le chevron up\r\n */\r\nconst closeInputIngredient = () => {\r\n    ingredient.style.display = 'flex';\r\n    ingredientList.style.display = 'none';\r\n    ingredientListMenu.style.display = 'none';\r\n    chevronUpIngredient.style.display = 'none';\r\n    chevronDownIngredient.style.display = 'block';\r\n    // ingredient.style.width = ingredientList.style.width = 'auto';\r\n\r\n};\r\n\r\nchevronUpIngredient.addEventListener ('click', closeInputIngredient);\r\n\r\n/**\r\n * Fermeture de l'input appliance au clic sur le chevron up\r\n */\r\nconst closeInputAppliance = () => {\r\n    appliance.style.display = 'flex';\r\n    appliancetList.style.display = 'none';\r\n    applianceListMenu.style.display = 'none';\r\n    chevronUpAppliance.style.display = 'none';\r\n    chevronDownAppliance.style.display = 'block';\r\n    // appliance.style.width = appliancetList.style.width = 'auto';\r\n};\r\nchevronUpAppliance.addEventListener ('click', closeInputAppliance);\r\n\r\n/**\r\n * Fermeture de l'input ustensiles au clic sur le chevron up\r\n */\r\nconst closeInputUstensils = () => {\r\n    ustensils.style.display = 'flex';\r\n    ustensilList.style.display = 'none';\r\n    ustensilListMenu.style.display = 'none';\r\n    chevronUpUstensils.style.display = 'none';\r\n    chevronDownUstensils.style.display = 'block';\r\n};\r\n\r\nchevronUpUstensils.addEventListener ('click', closeInputUstensils);\r\n\r\n\r\n/*********************************************** */\r\n// const chevronIngredient = document.getElementById('chevron-ingredient');\r\n// function filterIngredient () {\r\n//     const isDisplay = chevronIngredient.style.display === 'block';\r\n\r\n//     if (isDisplay) {\r\n//         console.log('ferme');\r\n//     } else {\r\n//         console.log('ouvert');\r\n//     }\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/components/tagsInput.js?");

/***/ }),

/***/ "./src/configs/data.js":
/*!*****************************!*\
  !*** ./src/configs/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    url: './data/recipes.json', \r\n    medias : 'assets/images'\r\n});\n\n//# sourceURL=webpack://les-petits-plats/./src/configs/data.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/filters/filtersList/filtersList */ \"./src/components/filters/filtersList/filtersList.js\");\n/* harmony import */ var _components_tagsInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tagsInput */ \"./src/components/tagsInput.js\");\n/* harmony import */ var _components_tagsInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tagsInput__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/search */ \"./src/utils/search.js\");\n/* harmony import */ var _components_recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/recipes */ \"./src/components/recipes/index.js\");\n/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/search/search */ \"./src/components/search/search.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function init() {\r\n  const { recipes } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_0__.getRecipes)();\r\n\r\n  (0,_components_recipes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(recipes);\r\n  (0,_components_search_search__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(recipes);\r\n  (0,_utils_search__WEBPACK_IMPORTED_MODULE_3__.searchButtonsInput)(recipes);\r\n\r\n  (0,_components_filters_filtersList_filtersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(recipes);\r\n}\r\ninit();\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRecipes\": () => (/* binding */ getRecipes)\n/* harmony export */ });\n/* harmony import */ var _configs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/data */ \"./src/configs/data.js\");\n\r\n\r\n\r\nasync function getRecipes() {\r\n    return fetch(_configs_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url)\r\n        .then((res) => {\r\n            return res.json();\r\n        })\r\n        .then((datas) => {\r\n            // console.log(datas);\r\n            return datas;\r\n        });\r\n}\r\n \n\n//# sourceURL=webpack://les-petits-plats/./src/utils/api.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchButtonsInput\": () => (/* binding */ searchButtonsInput)\n/* harmony export */ });\n\r\n\r\nconst inputSearchIngredient = document.querySelector('.ingredient-list');\r\nconsole.log(inputSearchIngredient);\r\n// const listIngredient = document.querySelector('.selection__button__list__ingredients');\r\n\r\n/**\r\n * Fonction qui filtre les ingrédients en fonction de ce qui est tapé dans l'input ingredient\r\n * @param {*} recipes \r\n */\r\nconst searchButtonsInput = (recipes) => {\r\n    let arrayResult = [];\r\n    const filterDataInput = (e) => {\r\n        const lettersInput = formatText(e.target.value);\r\n        // console.log(lettersInput);\r\n        if (lettersInput.length >= 1) {\r\n            const filterIngredients = (ingredients) => {\r\n                return ingredients.find(item => formatText(item.ingredient).includes(lettersInput));\r\n            };\r\n\r\n           \r\n\r\n            arrayResult = recipes.filter(recipe => {\r\n                const formatedRecipe = {\r\n                    ingredients: recipe.ingredients,\r\n                };\r\n                \r\n                const match = filterIngredients(formatedRecipe.ingredients);\r\n                return match;\r\n                \r\n            });\r\n            console.log(arrayResult);\r\n            \r\n            \r\n            displayRecipe(arrayResult); //fonction appelée qui permet le tri des cartes des recettes    \r\n            \r\n        }\r\n    };\r\n    inputSearchIngredient.addEventListener('input', filterDataInput);\r\n};\r\n\r\n\r\n// Recherche saisie bouttons \r\n// const searchButtonInput = (recipes) => {\r\n//     const inputSearchIngredient = document.querySelector('.selection_button_ingredients');\r\n//     // console.log(inputSearchIngredient)\r\n\r\n//     const listIngredient = document.querySelector('.selection__button__list__ingredients');\r\n\r\n\r\n//     // Input recherche boutton Ingrédient \r\n//     inputSearchIngredient.addEventListener('input', (e) => {\r\n//         e.preventDefault();\r\n//         listIngredient.innerHTML = '';\r\n//         // Affichage de la liste ingredients en rapport à la saisie \r\n//         (\r\n//             searchButtonsInput(e.target.value,  ingredientSelected(recipes))\r\n//         );\r\n//         console.log(e.target.value);\r\n//         // searchButtonClick();\r\n    \r\n//     });\r\n//     // console.log(ingredientSelected(recipes));\r\n// };\r\n\r\n// searchButtonInput();\r\n\r\n// 2e cas avec une boucle for :\r\n\r\n// function search (recipes) {\r\n//     let recipesArray = [];\r\n//     // let recipesIndex = 0;\r\n//     const filterData = (e) => {\r\n//         const inputLetters = formatText(e.target.value);\r\n        \r\n//         if (inputLetters.length > 2 ) {\r\n//             for (let i = 0; i < recipes.length; i++) {\r\n//                 if(recipes[i].name.toLowerCase().includes(inputLetters) ||\r\n//                 recipes[i].description.toLowerCase().includes(inputLetters) ||\r\n//                 recipes[i].ingredients[0].ingredient.toLowerCase().includes(inputLetters)) {\r\n//                     // recipesIndex++;\r\n//                     recipesArray.push(recipes[i]);\r\n//                 }\r\n                    \r\n//             }\r\n//             console.log(recipesArray);   \r\n//             // console.log(recipesIndex);\r\n//         }\r\n//         displayRecipe(recipesArray);\r\n//     };\r\n//     searchInput.addEventListener('input', filterData);\r\n// }\r\n// export default search;\r\n\r\n\r\n\n\n//# sourceURL=webpack://les-petits-plats/./src/utils/search.js?");

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