const totalPay = parseFloat(prompt("Ingrese el total de la cuenta a pagar."))
let opinion = prompt("¿Que tal fue el servicio? (Malo/Bueno/Excelente)").toLowerCase()

if (opinion === "malo") {
    let porcentaje = (10 * totalPay) / 100
    const result = porcentaje + totalPay
    alert(`Dado que el servicio fue ${opinion}. El total a pagar es ${result}`)
} else if (opinion === "bueno") {
    let porcentaje = (15 * totalPay) / 100
    const result = porcentaje + totalPay
    alert(`Dado que el servicio fue ${opinion}. El total a pagar es ${result}`)
} else if (opinion === "excelente") {
    let porcentaje = (20 * totalPay) / 100
    const result = porcentaje + totalPay
    alert(`Dado que el servicio fue ${opinion}. El total a pagar es ${result}`)
} else {
    alert("Ingreso una experiencia fuera de las opciones")
}