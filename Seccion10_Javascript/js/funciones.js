/**Funciones */

function Sumar() {
    console.log(10 * 10)
}

Sumar()

/**Metodos de Propiedad */

const reproductor = {
    reproducir: function () {
        console.log('Reproducir Cancion')
    }
}

reproductor.reproducir()

/**Arrow functions */

const restar = (n1, n2) => console.log(n1 + n2)


restar(5, 10)