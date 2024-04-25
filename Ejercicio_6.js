//Ingresar dos valores enteros y enumerar los elementos que los separan.

const numero1=10
const numero2=5

const menor = Math.min(numero1, numero2);
const mayor = Math.max(numero1, numero2);

for(let i=menor + 1 ;i<mayor; i++){
    console.log(i)
}