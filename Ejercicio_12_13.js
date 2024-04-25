//12_Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. 
//Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.

//13_Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.

const personas = [
    { nombre: 'Ana', sexo: 'femenino', edad: 25 },
    { nombre: 'Juan', sexo: 'masculino', edad: 30 },
    { nombre: 'Maria', sexo: 'femenino', edad: 35 },
    { nombre: 'Pedro', sexo: 'masculino', edad: 22 },
    { nombre: 'Lucia', sexo: 'femenino', edad: 40 },
    { nombre: 'Carlos', sexo: 'masculino', edad: 28 }
  ];
  
  function obtenerPromedioEdad(personas) {
    let sumaEdad = 0; 
    for (let i = 0; i < personas.length; i++) {
      sumaEdad += personas[i].edad; 
    }
    return sumaEdad / personas.length; 
  }
  
  
  function mujerMayorEdad(personas) {
    let mayorEdad = -1; 
    let mujerMayor = ''; 
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].sexo === 'femenino' && personas[i].edad > mayorEdad) {
        mayorEdad = personas[i].edad; 
        mujerMayor = personas[i].nombre;
      }
    }
    return mujerMayor;
  }
  
  
  function hombreMenorEdad(personas) {
    let menorEdad = Infinity; 
    let hombreMenor = ''; 
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].sexo === 'masculino' && personas[i].edad < menorEdad) {
        menorEdad = personas[i].edad; 
        hombreMenor = personas[i].nombre; 
      }
    }
    return hombreMenor;
  }
  
 
  function promedioEdadMujeres(personas) {
    let sumaEdad = 0; 
    let cuentaMujeres = 0; 
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].sexo === 'femenino') {
        sumaEdad += personas[i].edad;
        cuentaMujeres++; 
      }
    }
    return sumaEdad / cuentaMujeres; 
  }
  
  
  const promedioEdad = obtenerPromedioEdad(personas);
  console.log('Promedio de edad:', promedioEdad);
  
  const nombreMujerMayorEdad = mujerMayorEdad(personas);
  console.log('Mujer con mayor edad:', nombreMujerMayorEdad);
  
  const nombreHombreMenorEdad = hombreMenorEdad(personas);
  console.log('Hombre con menor edad:',nombreHombreMenorEdad);
  
  const promedioEdadMujeresResultado = promedioEdadMujeres(personas);
  console.log('Promedio de edad de las mujeres:', promedioEdadMujeresResultado);