
//pimer codigo
alert("hola mundo")

//variables

var NombreVriable = 'Audifonos'

/**Inicalizar multiples variables */

var Producto = 'Computador',
    Disponible = true,
    Categoria = 'Computadoras';

/**Estilos para las variables */
var nombre_producto, /**undescore */
    nombreProducto, /**Camelcase */
    NombreProducto;/**Pascal Case */

/**Variables con let */

let NombreVariable

/**Variables con const */

const Pi = 3.1416

/**Numero y Operadores */

let n1 = 1,
    n2 = 2;

console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)

/**Metodo Math */

let resultado = Math.PI /**VALOR DE PI */
let resultado2 = Math.round(2.2) /**Redondea un numero */
let resultado3 = Math.ceil(2.2)/**Siempre redondea hacia arriba */
let resultado4 = Math.floor(2.5)/**Siempre redondea hacia abajo */
let resultado5 = Math.sqrt(16)/**Sacar la raiz cuadrada */
let reusltado6 = Math.abs(-200)/**Transforma el valor a positivo */
let resultado7 = Math.min(3, 5, 1, 8)/**Selecciona el valor minimo */
let resultado8 = Math.max(3, 5, 1, 8)/**Selecciona el valor maximo */

console.log(resultado)

/**Orden que se ejecutan las operaciones matematicas */

let resultado99 = 20 + 30 * 2 /**El orden por defecto son las multiplicaciones antes q la suma */
let resultado98 = (20 + 30) * 2/**Personalizar el orden */


/**Incremento */

let variableIncrementada = 10

variableIncrementada++

variableIncrementada += 10 /**Va incrementado de acuerdo al valor */

/**Decremento */

variableIncrementada--

/**Concatenacion */

const nombre = 'Jaime'
const apellido = 'Sandoval'

console.log("Nombre: " + nombre + " " + "Apellido: " + apellido)

/**template strings */
console.log(`Nombre: ${nombre} Apellido: ${apellido}`)

/**Booleanos */

const h1 = true
const h2 = false

console.log(h1)
console.log(h2)

/**Objetos */

const producto = {
    NombreProducto: "Pantalla LCD",
    Precio: 300,
    Cantidad: 2
}

console.log(producto)

/**Acceder a un elemento */
console.log(producto.NombreProducto)

/**Otra forma de acceder a un elemento */
console.log(producto["Precio"])

/**Agregar propiedades */
producto.imagen = "imagen.jpg"

/**Eliminar Propiedades */
delete producto.Cantidad

/**Pasar la informacion de un objeto a una variable */

//Forma anterior
const PrecioProducto = producto.Precio
const NombreProducto = producto.NombreProducto


//destructuring objetc
const { Precio } = producto
const { NombreProducto } = producto

/**
 * Frezer: restriccion total
 * 
 * seal: restringe el agregar o eliminar una propiedad del objeto, pero si permite modificar un valor
 * 
 */

/**Unir objetos */

const Auto = {
    Marca: "Chevrolet",
    Modelo: "Sail",
    Año: 2021
}

const consecionario = {
    Direccion: "Violeta parra",
    Numero: 1858,
    Comuna: "La Pintana"
}

const Nuevoauto = { ...Auto, ...consecionario }

console.log(Nuevoauto)