import getDataFetch from "../helpers/getData.js";
import { printCardProperty } from "../modules/printProperty.js";
import deleteDataFetch from "../helpers/deleteData.js";

const urlFavorites = "http://localhost:3000/favorites";

const containerPrintFavorites = document.querySelector(".containerMain");

document.addEventListener("DOMContentLoaded", async() => {
    const favorites = await getDataFetch(urlFavorites);
    printCardProperty(containerPrintFavorites, favorites);
    
})

document.addEventListener("click",  ({target}) => {
    if(target.classList.contains("delete")){
        console.log("Escucho el click de borrar");
        Swal.fire({
            title: "¿Está usted seguro de eliminar?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then(async(result) => {
            if(result.isConfirmed){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                const idDelete = parseInt(target.id);
                console.log(idDelete);
                const urlDelete = `${urlFavorites}/${idDelete}`;
                console.log(urlDelete);

                try{
                    await deleteDataFetch(urlDelete);
                } catch(error){
                    alert("Error, no se puede ejecutar correctamente la funcion de Delete.");
                }
            }
          })
    }
})