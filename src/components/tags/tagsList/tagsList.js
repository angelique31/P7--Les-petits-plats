import { tagsItemAppliance, tagsItemUstensil} from "../tagsItem/tagsItem";
import { closeTagAppliance, closeTagUstensil } from "../../closeTags";



// export const tagsListAppliance = () => {
//   const appliances = document.querySelectorAll('.appliance');
//   // console.log(appliances)
//   appliances.forEach(function (appliance) { 
//     appliance.addEventListener('click', () => {
//       tagsItemAppliance(appliance);
//       closeTagAppliance(idTag, idButton, recipes);
//     });
//   });
// }

export const tagsListUstensil = () => {
  const ustensils = document.querySelectorAll('.ustensil');
  // console.log(ustensils)
  ustensils.forEach(function (ustensil) { 
    ustensil.addEventListener('click', () => {
      tagsItemUstensil(ustensil);
      closeTagUstensil(idTag, idButton, recipes);
    });
  });
}