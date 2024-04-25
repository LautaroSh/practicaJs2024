//15_Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.

function obtenerDivisibles(minimo, maximo, divisor) {
    const listaDivisibles = [];
       
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) { 
        listaDivisibles.push(i);
    }
  
    return listaDivisibles; 
  }
  
  const minimo = 1; 
  const maximo = 20; 
  const divisor = 3; 
  
  const resultado = obtenerDivisibles(minimo, maximo, divisor); 
  console.log('Números divisibles por', divisor, 'entre', minimo, 'y', maximo, ':', resultado);
}