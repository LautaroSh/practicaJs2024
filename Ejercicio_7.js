//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

const numero1 = 5;
const numero2 = 15;

let menor = Math.min(numero1, numero2);
let mayor = Math.max(numero1, numero2);

console.log(`Los múltiplos de 3 comprendidos entre ${menor} y ${mayor} son:`);
for (let i = menor; i <= mayor; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}