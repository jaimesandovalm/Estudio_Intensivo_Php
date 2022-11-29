/**Fetch API */

function obtenerEmpleados() {

    const archivo = 'js/empleados.json'

    fetch(archivo)
        .then(resultado => {
            return resultado.json()
        })
        .then(datos => {
            const { empleados } = datos;
            empleados.forEach(empleado => {
                console.log(empleado)
            });
        })

}

obtenerEmpleados();
