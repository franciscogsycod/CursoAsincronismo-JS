// Reto de platzi

const { url } = require("inspector");

// Intanciar

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API ="https://rickandmortyapi.com/api/character/"
let personaje = 0;

function fetchData(URL_API,callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", URL_API, true);                           // true -> activar el asincronismo
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText));
            }
            else{
                const error = new Error("Error " + URL_API);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

fetchData(API,function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[personaje].id, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3,data3){
            if(error3) return console.log(error3);
                console.log(data1.info.count)
                console.log(data2.name)
                console.log(data3.dimension)
        })
    })
})