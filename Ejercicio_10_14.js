//Sumar solo los elementos pares de un array.

var numeros= [32, 45, 73, 18, 29, 50, 67]
var suma=0
for (let i=0; i<numeros.length; i++){
    if(numeros[i] % 2 === 0){
        suma=suma+numeros[i]
    }
}

const numeroPares = numeros.filter(numero => numero % 2 === 0)

console.log("Los numeros pares son:" )
console.log(numeroPares)
console.log("La suma de los numeros pares es:" )
console.log(suma)