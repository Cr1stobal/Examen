let nombres=["juan","yasuri","hector","tito","ivy"]

//escribir un ciclo que repita una acción
/*for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}*/

//forma de reescribir un ciclo for con js
/*nombres.forEach(function(nombre){
    console.log(nombre)
})*/

/*let numeros=[1,2,3,4,5,6,7,8,9,10]

numeros.forEach(function(numero) {
    console.log(numero+10);
})*/

/*let salarios=[3500000,5000000,8000000]
salarios.forEach(function(salario){
    console.log(salario-(salario*19/100))
})*/

let calificaciones=[3.5,4,2,1.5,3]
//sumar las notas y calcular el promedio de esas notas
let suma=0
calificaciones.forEach(function(calificacion){
    suma=suma+calificacion   
})
console.log(suma/calificaciones.length)