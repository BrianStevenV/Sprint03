import getDataFetch from "../helpers/getData.js";
import { printCardProperty } from "../modules/printProperty.js";

const urlFavorites = "http://localhost:3000/favorites";

const containerPrintFavorites = document.querySelector(".containerMain");

document.addEventListener("DOMContentLoaded", async() => {
    const favorites = await getDataFetch(urlFavorites);
    printCardProperty(containerPrintFavorites, favorites);
})