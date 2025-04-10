let user = "Geracamino06".toLowerCase()
let password = "123456"

let userLogin = prompt("Ingrese su nombre de usuario.")
let passLogin  = prompt("Ingrese su contraseña.")

if (user === userLogin && password === passLogin) {
  alert (`¡Bienvenido ${user}!`)
} else {
  alert ("¡El usuario o contraseña son incorrectos!")
}