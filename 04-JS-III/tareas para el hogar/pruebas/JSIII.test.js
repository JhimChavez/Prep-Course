
confirmación inicial de nachovip
 1 colaborador
180 líneas (134 turnos)  4.88KB
// No cambia los nombres de las funciones.

function  devolverPrimerElemento ( arreglo )  {
  // Devuelve el primer elemento de un array (pasado por parametro)
  // Tu codigo:
}


function  devolverÚltimoElemento ( arreglo )  {
  // Devuelve el último elemento de un array
  // Tu codigo:
}


function  obtenerLargoDelArray ( array )  {
  // Devuelve el largo de un array
  // Tu codigo:
}


function  incrementarPorUno ( array )  {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu codigo:
}


function  agregarItemAlFinalDelArray ( matriz ,  elemento )  {
  // agrega el "elemento" al final del array
  // y devuelve el array
  // Tu codigo:
}


function  agregarItemAlComienzoDelArray ( array ,  elemento )  {
  // agregue el "elemento" al comienzo del arreglo
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu codigo:
}


function  dePalabrasAFrase ( palabras )  {
  // "palabras" es un arreglo de cuerdas/cadenas
  // Devuelve una cadena donde todas las palabras están concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hola', '¡mundo!'] -> '¡Hola mundo!'
  // Tu codigo:
}


function  arregloContiene ( arreglo ,  elemento )  {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "verdadero" si está, o "falso" si no está
  // Tu codigo:
}


function  agregarNumeros ( numeros )  {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu codigo:
}


function  promedioResultadosTest ( resultadosTest )  {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu codigo:
}


function  numeroMasGrande ( numeros )  {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el numero mas grande
  // Tu codigo:
}


function  multiplicar Argumentos ( )  {
  // Usa la palabra clave `argumentos` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu codigo aqui:
}


function  cuentoElementos ( arreglo ) {
  //Realiza una función que devuelve la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu codigo aqui

}


function  diaDeLaSemana ( numeroDeDia )  {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dio el número del día de la semana, vuelve: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu codigo aqui   
  
} 


function  empiezaConNueve ( n )  {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe devolver true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu codigo aqui
  
}


function  todosIguales ( arreglo )  {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar verdadero, caso contrario devolver falso.
  //Escribe tu codigo aqui  
  
} 


function  mesesDelAño ( array )  {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y devolverlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu codigo:
}


function  mayorACien ( array )  {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu codigo:
}


función  romperDeclaración ( numero )  {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un limite de 10 veces.
  //Guardar cada nuevo valor en una matriz.
  //Devolver el array
  //Si en algun momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecucion y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el enunciado 'break'
  // Tu codigo:
}


function  continuarDeclaración ( numero )  {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un limite de 10 veces.
  //Guardar cada nuevo valor en una matriz.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continúa con la siguiente iteración
  //Pista: usá el enunciado 'continuar'
  // Tu codigo:
}


// No modificar nada debajo de esta linea
// --------------------------------

módulo _ exportaciones  =  {
  devolverPrimerElemento ,
  devolver Ultimo Elemento ,
  obtenerLargoDelArray ,
  incrementarPorUno ,
  agregarItemAlFinalDelArray ,
  agregarItemAlComienzoDelArray ,
  dePalabrasA Frase ,
  arrayContiene ,
  agregarNumeros ,
  PromedioResultadosTest ,
  numeroMasGrande ,
  multiplicar argumentos ,
  cuentoElementos ,
  diaDeLaSemana ,
  EmpiezaConNueve ,
  todosIguales ,
  mesesDelAño ,
  alcaldeACien ,
  romperDeclaración ,
  continuarDeclaración
} ;
