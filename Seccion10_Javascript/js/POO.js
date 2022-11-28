/**Programacion Orientada a Objetos */

/**Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 800
}

/**Object Constructor */
function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
}

const producto2 = new Producto('Mouse Usb', 1500)


console.log(producto2)

/**Prototype */

/**crear funciones para un objeto en especifico */


/**Clases */

class ProductoClase {

    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un Precio de : $ ${this.precio}`
    }
}

/**Instancia de la clase */
const producto1 = new ProductoClase('Mouse Usb', 1500)
const producto24 = new ProductoClase('Teclado Usb', 7000)

console.log(producto1)
console.log(producto24)


/**Herencia */

class Libro extends ProductoClase {

    constructor(nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn
    }
}

const libro1 = new Libro('Javascript', 9990, 6776363762762)

console.log(libro1)