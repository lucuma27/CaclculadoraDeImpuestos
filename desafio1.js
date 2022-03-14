// Serv digital 8% 21% 35%
// prod 30% 35%


function dolarpeso(){
    let result = valor * 107 *1.64
    alert (`El valor total en pesos argentinos del servicio digital a pagar será $${result}`)
    console.log (`El valor total en pesos argentinos del servicio digital a pagar será $${result}`)
}
function dolarpeso2(){
    let result = valor * 107 *1.65
    alert (`El valor total en pesos argentinos del producto a pagar será $${result}`)
    console.log (`El valor total en pesos argentinos del producto a pagar será $${result}`)

}

function peso() {
    let result = valor * 1.64
    alert (`El valor total en pesos argentinos del servicio digital a pagar será $${result}`)
    console.log (`El valor total en pesos argentinos del servicio digital a pagar será $${result}`)

}
function peso2() {
    let result = valor * 1.65
    alert (`El valor total en pesos argentinos del producto a pagar será $${result}`)
    console.log (`El valor total en pesos argentinos del producto a pagar será $${result}`)

}

 let name = prompt("Ésta es una pagina destinada al calculo del valor total de un producto sumando sus impuestos, para conocerte contanos cuál es tu nombre")

 let saludo = prompt(`Hola ${name} para continuar ¿De qué tipo de consumo se trata? 

 Por favor responder con el número correspondiente: servicio digital (1)/ compra de producto en el exterior (2)`) 

 let moneda = prompt (`¿En que moneda se encuentra el consumo? Responder: peso/dolar`)

 let array = prompt("¿Cuantos son los valores?")

 const precios = [];

 do {
    let valor = prompt ("¿Cuáles son los precios?");
    precios.push(valor);


 } while (precios.length!= array);


 prompt (`Para continuar, ¿Nos confirmas si los precios que nos indicaste son correctos? 
 ${precios}      
 Porfavor responder si/no`)

if ((moneda == "dolar") && (saludo == "1")) {
    dolarpeso()
}else if ((moneda == "dolar") && (saludo == "2")) {
    dolarpeso2()
}

if ((moneda == "peso") && (saludo == "1")) {
    peso()
}else if ((moneda == "peso") && (saludo == "2")) {
    peso2()
}

