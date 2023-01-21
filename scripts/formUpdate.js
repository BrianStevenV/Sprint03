import getDataFetch from "../helpers/getData.js";
import putDataFetch from "../helpers/putData.js";


const urlPropertys = "http://localhost:3000/estate";
const form = document.querySelector(".form");

const valuesForm = Object.values(form);

const editFormStr = sessionStorage.getItem("propertyEdit") ? JSON.parse(sessionStorage.getItem("propertyEdit")) : "";

const editForm = editFormStr ? parseInt(editFormStr) : null;

const submitButton = valuesForm[valuesForm.length-1];
console.log(submitButton);

document.addEventListener("DOMContentLoaded", async() => {

    let property = {};
    const url = editForm ? `${urlPropertys}/${editForm}` : urlPropertys;

    try{
        if(editForm){
            property = await getDataFetch(url);
            console.log(property);
            valuesForm.forEach((valueInput) =>{
                if(valueInput.id){
                    valueInput.value = property[valueInput.id];
                }
            });

        } else{
            alert("Error del else");
        }
        await submitForm(form, url);
    } catch(error){
        alert("Error!");
    }

})


//Listening event submit

const submitForm = async (form, url) => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const propertyInfo = {};
        const valuesForm = Object.values(form);
        // 

        valuesForm.forEach(valueInput => {
            if(valueInput.id){
                propertyInfo[valueInput.id] = valueInput.value;
            }
        })

        console.log(propertyInfo);

        //Prevenir que se cree o se edite una propiedad con falta de informacion.
        const labelsNodeList = document.querySelectorAll("label");

        const arrLabel = [... labelsNodeList];
        console.log(arrLabel);

        const noEmpty = !validationForm(arrLabel, propertyInfo) ? true: false;
        if(noEmpty && editForm){
            await putDataFetch(url, propertyInfo);
        }
        if(noEmpty && !editForm){}
    })

    


}


const validationForm = (arrLabel, propertyInf) => {

    const keyLabels = arrLabel.map((key) => ({
        labelName : key.innerHTML,
        keyName : key.getAttribute("for"),
    }));

    console.log(keyLabels);

    let keyStr = "";
    for(const key in propertyInf){
        const propertyProperty = propertyInf[key];

        if(!propertyProperty){
            const labelFound = keyLabels.find((label) => label.keyName === key);
            keyStr += labelFound.labelName + ", ";
        }
    }

    console.log(keyStr);

    if(keyStr){
        const numberInputsEmpty = amountChar(",", keyStr);
        console.log(numberInputsEmpty);

        keyStr = keyStr.slice(0, -2);

        let messenger = numberInputsEmpty === 1 ? `El campo ${keyStr} no se encuentra diligenciado` : `Los campos ${keyStr} no se encuentran diligenciados.`;
        alert(messenger);
        return false;
    }
}


const amountChar = (char, string) => {
    const textString = string.split(char);
    const arrayChar = textString.filter((str) => str !== " ");
    console.log(arrayChar);
    return arrayChar.length;
}

