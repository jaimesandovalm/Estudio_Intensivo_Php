//arrays o arreglos

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


/**Agregar un elemento al array */
numeros[10] = 10

/**Agregar un elemento hacie el final del arrego */
numeros.push(11)

/**Agregar un elemento hacia el principio del arreglo */

numeros.unshift(-1, -2, -3)

/**Eliminar el ultimo elemento del arreglo */

numeros.pop();

/**Eliminar el primer elemento del arreglo */
numeros.shift()

console.table(numeros)

/**Rest Operator o Spread Operator */
//agregar al final
const NuevoArreglo = [...numeros, 20]

//agregar al inicio
//const NuevoArreglo = [-20,...numeros]
console.table(NuevoArreglo)