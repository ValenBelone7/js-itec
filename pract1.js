const name = prompt("Ingrese su nombre").toLowerCase()
alert(`Su nombre es ${name}`)
const age = parseInt(prompt("Ingrese su edad"))
alert(`Su edad es ${age}`)

if (13 > age && age > 5) {
    alert(`${name} el valor de la entrada es $1000`)
} else if (18 > age && age > 13) {
    alert(`${name} el valor de la entrada es $1500`)
} else if (80 > age && age > 17) {
    alert(`${name} el valor de la entrada es $2000`)
} else if (5 > age && age > 80) {
    alert(`${name} el valor de la entrada es gratuita`)
} else {
    alert(`${name} Ingresaste una edad invalida`)
}
