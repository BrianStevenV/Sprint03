import getDataFetch from "../helpers/getData.js";
import postDataFetch from "../helpers/postData.js"
import { btnSelect } from "../modules/filtered.js";
import { printCardProperty } from "../modules/printProperty.js";

/* let propertyDetails = sessionStorage.getItem("propertyDetails") ? JSON.parse(sessionStorage.getItem("propertyDetails")) : []; */

const urlPropertys = "http://localhost:3000/estate";
const urlFavorites = "http://localhost:3000/favorites";
// const idPropertyStr = sessionStorage.getItem("propertyDetails") ? JSON.parse(sessionStorage.getItem("propertyDetails")) : null;
const printContainer = document.getElementById("containerMain");
const search = document.getElementById("btnSearch");
const searchWriter = document.getElementById("inputSearch");



const btnType = document.getElementById("all");
const btnHouse = document.getElementById("house");
const btnTown = document.getElementById("town");
const btnApartment = document.getElementById("apartment");

const selectFiltered = [btnType, btnHouse, btnTown, btnApartment];
let properties = [];

document.addEventListener("DOMContentLoaded", async() => {
    try{
        //properties era const, pero se quito para hacer el array vacio de properties con let
        properties = await getDataFetch(urlPropertys);  
        console.log(properties);
        
        printCardProperty(printContainer, properties);

        const filt = btnSelect(selectFiltered, properties);//No tiene el const
    } catch(error){
        console.log(error);
        alert(error);
    }

})

//Funcionaldiad de ir a pagina detalles ...

document.addEventListener("click", async ({target}) =>{
    if(target.classList.contains("thubmnail")){
        console.log("Quiero ir a detalles");
        console.log(target.id);
        sessionStorage.setItem("propertyDetails", JSON.stringify(target.id));
        location.href = './pages/details.html';
    }

    //Agregar a favoritos

    if(target.classList.contains("favoritos")){
        const idFavorites = target.id;
        console.log(target.id); //or direction
        const urlPropertyFavorite = `${urlFavorites}?id=${idFavorites}`;
        const favorites = await getDataFetch(urlPropertyFavorite);
        console.log(favorites);

        const favoriteProperty = await getDataFetch(`${urlPropertys}/${idFavorites}`);

        if(favorites.length === 0 && Object.entries(favoriteProperty).length){
            //Obtenemos el objeto
            await postDataFetch(urlFavorites, favoriteProperty);
            const data = await getDataFetch(urlFavorites);
            console.log(data);
        }
    }
});


//Funcionalidad input busquedad


search.addEventListener("submit", async () => {
    const searchTerm = searchWriter.value;
    console.log(searchTerm);

    if(searchTerm){

    }
});