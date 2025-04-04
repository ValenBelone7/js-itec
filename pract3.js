const weight = parseFloat(prompt("Ingrese su peso en KG"))
const height = parseFloat(prompt("Ingrese su altura en metros"))

const imcResult = weight / (height * height)
alert(`Su indice de masa corporal es ${imcResult}`)

if (imcResult < 18.5) {
    alert(`Segun su resultado de IMC usted esta en "Bajo peso"`)
} else if (imcResult > 18.5 && imcResult < 25) {
    alert(`Segun su resultado de IMC usted esta en "Peso normal"`)
} else if (imcResult > 25 && imcResult < 30) {
    alert(`Segun su resultado de IMC usted esta en "Sobrepeso"`)
} else if (imcResult > 30) {
    alert(`Segun su resultado de IMC usted esta en "Obesidad"`)
} else {
    alert(`Resultado invalido`)
}