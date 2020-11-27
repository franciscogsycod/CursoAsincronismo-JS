// Promesas

const sWH = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve("Se cumplio la promesa! :)")
        }else{
            reject("No se cumplio la promesa :(")
        }
    })
}

sWH()
.then(response => console.log(response))
.catch(err => console.error(err))

// para ver como transcurre en el tiempo

const sWH2 = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(()=>{
                resolve("Se volvio a cumplir la promesa tras 2 segundos")
            },2000)
        }else{
            const error = new Error("Error de promesa")
            reject(error)
        }
    })
}

sWH2()
.then(response => console.log(response))
//.then(() => console.log("Hola tras a la promesa de 2 segundos"))
.catch(error => console.error(error))

// promesas encadenadas - Metodo ALL

Promise.all([sWH(),sWH2()])
.then(response => {
    console.log("Arreglo de resultados",response)
})
.catch(error => {
    console.error(error)
})