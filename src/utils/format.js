export function formatText (text) {
    // console.log(text);
    return text.toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s/g,'');
    // toLowerCase() : mettre en minuscule, 
    // trim() : gérer les espaces avant et après le string,
    // normalize('NFD').replace(/[\u0300-\u036f]/g, '') : nettoyer les accents,
    // replace(/\s/g,'') : enlever les espaces entre chaque string, par ex taper creme fraiche qui a un espace entre les 2 mots
}