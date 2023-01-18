import getDataFetch from "../helpers/getData.js"

/* export const printCardDetails = (container, listVideo) => {
    container.innerHTML = '';
    listVideo.forEach(idPropertyStr => {
        const section = document.createElement("section");
    section.setAttribute("class", "container__print");
    section.innerHTML = `<figure class="container__figure">
    <img src="${idPropertyStr.img}" alt="imagen" class="thubmnail">;
</figure>
<h1 class="direction">${idPropertyStr.direction}</h1>
<h3 class="location">${idPropertyStr.location}</h3>
<h3 class="area__cuadrados"${idPropertyStr.area}</h3>
<label for="bedrooms" class="bedrooms__label">Numero de Habitaciones</label>
<h3 class="bedrooms">${idPropertyStr.bedroom}</h3>
<label for="bathrooms" class="bathrooms__label">Numero de Servicio</label>
<h3 class="bathrooms">${idPropertyStr.toilets}</h3>
<label for="parking" class="parking__label">Parqueadero</label>
<h3 class="parking">${idPropertyStr.parking}</h3>
<label for="type" class="type__label"> Tipo de Inmueble</label>
<h3 class="type">${idPropertyStr.type}</h3>
<label for="status" class="status__label">Estado</label>
<h3 class="status">${idPropertyStr.status}</h3>

<label for="owner" class="owner__label">Informacion del propietario</label>
<h3 class="owner">${idPropertyStr.owner}</h3>
<h3 class="phone">${idPropertyStr.phone}</h3>
<p class="description">${idPropertyStr.description}</p>
<h1 class="price">${idPropertyStr.price}</h1>`;

container.appendChild(section);
        
    });
} */

const idPropertyStr = sessionStorage.getItem("propertyDetails") ? JSON.parse(sessionStorage.getItem("propertyDetails")) : null;
console.log(idPropertyStr);

const idProperty = idPropertyStr ? parseInt(idPropertyStr) : null;
console.log(idProperty);

/* const idProperty = sessionStorage.getItem("propertyDetails") ? Number(JSON.parse(sessionStorage.getItem("propertyDetails"))) : null;
console.log(idProperty); */


const containerDetails = document.querySelector(".container__js");
console.log(containerDetails);



const urlProperty = `http://localhost:3000/estate/${idProperty}`;

document.addEventListener('DOMContentLoaded', async () => {
    try{
        const property = await getDataFetch(urlProperty);  
        console.log(property);

        containerDetails.innerHTML = `<section class="container__print">
        <figure class="container__figure">
            <img src="${property.img}" alt="imagen" class="thubmnail">;
        </figure>
        <h1 class="direction">${property.direction}</h1>
        <h3 class="location">${property.location}</h3>
        <h3 class="area__cuadrados">${property.area}</h3>
        <label for="bedrooms" class="bedrooms__label">Numero de Habitaciones</label>
        <h3 class="bedrooms">${property.bedroom}</h3>
        <label for="bathrooms" class="bathrooms__label">Numero de Servicio</label>
        <h3 class="bathrooms">${property.toilets}</h3>
        <label for="parking" class="parking__label">Parqueadero</label>
        <h3 class="parking">${property.parking}</h3>
        <label for="type" class="type__label"> Tipo de Inmueble</label>
        <h3 class="type">${property.type}</h3>
        <label for="status" class="status__label">Estado</label>
        <h3 class="status">${property.status}</h3>
        
        <label for="owner" class="owner__label">Informacion del propietario</label>
        <h3 class="owner">${property.owner}</h3>
        <h3 class="phone">${property.phone}</h3>
        <p class="description">${property.descripcion}</p>
        <h1 class="price">${property.price}</h1>
    </section>`

    /* printCardDetails(urlProperty, containerDetails); */

    }   catch(error){
        console.log("error");
        alert("error");
    }
});