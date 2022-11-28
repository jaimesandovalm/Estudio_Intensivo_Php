/**Iteradores */

/**For loop */
for (let i = 0; i < 10; i++) {
    console.log(i)

}

const auto = [
    { Marca: 'Chevrolet', Modelo: 'sail' },
    { Marca: 'Chevrolet', Modelo: 'spark' },
    { Marca: 'Chevrolet', Modelo: 'spark gt' },
    { Marca: 'Chevrolet', Modelo: 'tracker' },
    { Marca: 'Chevrolet', Modelo: 'camaro' },
    { Marca: 'Chevrolet', Modelo: 'captiva' },
]

for (let i = 0; i < auto.length; i++) {
    console.log(auto[i])
}

/**While loop */
console.log("While")

let i = 0

while (i <= 10) {
    console.log(i)

    i++
}

/**Do While loop */
do {
    console.log(i)

    i++
} while (i < 100)

/**ForEach */
/**Solo imprimir */
auto.forEach(function (chevrolet) {
    console.table(chevrolet)
})

/**map */
/**Crear nuevo arreglo */
auto.map(chevrolet => console.log(chevrolet))