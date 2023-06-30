/*
let nombreApellido = prompt ("ingrese su nombre y apellido");
let espacio = (" ")
alert ("Bienvenido" + espacio + nombreApellido + espacio +"al gimnasio")

let edad = prompt ("por favor ingrese su edad");

let horario1 = ("09:00")
let horario2 = ("10:00")
let horario3 = ("11:00")
let horario4 = ("12:00") 
let horario5 = ("14:00")
let horario6 = ("15:00")
let horario7 = ("16:00")
let horario8 = ("17:00") 
if (edad < 18 ){
    alert ("Te mostraremos los horarios disponibles a continuacion:")
    alert(horario1 + ", " + horario2 + ", " + horario3 + ", " + horario4);
}else{
    alert ("Te mostraremos los horarios disponibles a continuacion:")
    alert(horario5 + ", " + horario6 + ", " + horario7 + ", " + horario8);
    
}
let menor = prompt("Que horario te queda comodo para el dia de hoy?")
alert ("Perfecto!"+ espacio +nombreApellido + espacio+"tu reserva para el dia de hoy queda agendada a las"+espacio +menor+"hs");


alert("Precios disponibles:");
let precio1 = ("$3200")
let precio2 = ("$4100")
let precio3 = ("$5000")

let eleccion;

do {
  alert("1. Dos veces a la semana - Precio: " + precio1);
  alert("2. Tres veces a la semana - Precio: " + precio2);
  alert("3. Libre - Precio: " + precio3);

  eleccion = prompt("Escriba el número de la opción elegida: ");
} while (parseInt(eleccion) < 1 || parseInt(eleccion) > 3);

alert("Perfecto! Queda agendado su ingreso, precio mensual: " + eval("precio" + eleccion) + ". ¡Le esperamos!");
*/
function conParametros(parametro1, parametro2) {
  console.log(parametro1 + "reee " + parametro2);
}
