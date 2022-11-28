/**Palabra reservada this */

const reservacion = {
    nombre: 'Jaime',
    Lugar: 'Hotel Marriot',
    Informacion: function () {
        console.log(`El nombre ${this.nombre} el lugar ${this.Lugar}`)
    }
}

reservacion.Informacion()
