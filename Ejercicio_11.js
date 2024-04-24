// Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

const palabra = "programacion";

function contarLetras(palabra) {
    const recuentoLetras = {};  
    
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i].toLowerCase();  
        
        if (recuentoLetras[letra]) {
            recuentoLetras[letra]++;
        } else {
            
            recuentoLetras[letra] = 1;
        }
    }

    return recuentoLetras;  
}

const recuento = contarLetras(palabra);

console.log("Recuento de letras:", recuento);