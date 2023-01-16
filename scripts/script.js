import getDataFetch from "../helpers/getData.js"
import { printCardProperty } from "../modules/printProperty.js";

const urlPropertys = "http://localhost:3000/estate";

const printContainer = document.getElementById("containerMain");

document.addEventListener("DOMContentLoaded", async() => {
    const properties = await getDataFetch(urlPropertys);  
    console.log(properties);

    printCardProperty(printContainer, properties);
})