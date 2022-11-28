/**Estructuras de Control */

/**If */

const puntaje = 1000

if (puntaje == 1000) {
    console.log("El puntaje es 1000")
} else {
    console.log("El puentaje no es igual")
}

/**Switch */

const MetodoPago = 'tarjeta'

switch (MetodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta')
        break
    case 'efectivo':
        console.log('Pagaste en efectivo')
        break
    default:
        console.log('Aun no has pagado')
        break
}