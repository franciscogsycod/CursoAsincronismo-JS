const dSA = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve("Do something async"),3000)
            : reject(new Error("This error"))
    })
}

const dS = async() => {
    const something = await dSA()
    console.log(something)
}

console.log("Before")
dS()
console.log("After")

const otherFunction = async() =>{
    try{
        const something = await dSA();
        console.log(something);
    }
    catch(error){
        console.error(error)
    }
}

console.log("Before 1")
otherFunction()
console.log("After 1")