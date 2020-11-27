// Calculadora

function sumar(num1,num2){
    return num1 + num2;
}

function calcular(value1,value2,callback){
    return callback(value1,value2);
}

console.log(calcular(2,10,sumar))

// Fecha actual

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
};

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
