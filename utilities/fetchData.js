// Reto de platzi

const { url } = require("inspector");

// Instanciar

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let personaje = 0;

const fetchData = (URL_API) => {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open("GET", URL_API, true);                           // true -> activar el asincronismo
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){

                (xhttp.status ===200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error", URL_API));
            }
        });
        xhttp.send();
    });
}       

module.exports = fetchData;