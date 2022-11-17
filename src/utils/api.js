import configData from '../configs/data';


export async function getRecipes() {
    return fetch(configData.url)
        .then((res) => {
            return res.json();
        })
        .then((datas) => {
            // console.log(datas);
            return datas;
        });
}
 