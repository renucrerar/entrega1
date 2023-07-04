  
let nombreApellido = prompt ("ingrese su nombre y apellido");
alert ("Bienvenido " + nombreApellido + " al gimnasio")

let edad = prompt ("por favor ingrese su edad");

let horarios = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] //CORCHETES PORQUE ES UNA LISTA

alert ( "Te mostraremos los horarios disponibles a continuacion:")

let stringHoras = "" //DECLARO UNA VARIABLE VACIA



if (edad < 18){ 
  empezarDesde = 0
} else {
  empezarDesde = 4
}



for (let i = empezarDesde; i < empezarDesde + 4; i++) { //I VALE EMPEZAR-DESDE, SI I ES MENOR A EMPERZAR-DESDE AVANZAR4 VECES
  stringHoras = stringHoras + " " + horarios[i]  //EN LA VARIABLE VACIA VAMOS GUARDANDO LAS HORAS QUE SE IMPRIMEN
  
}
alert(stringHoras) //IMPRIMIMOS LAS HORAS DISPONIBLES (JUNTAS)
let menor = prompt("Que horario te queda comodo para el dia de hoy?")
alert ("Perfecto! " +nombreApellido + " tu reserva para el dia de hoy queda agendada a las " +menor+"hs");

function precio (abonar){
  alert ("El precio para pase libre mensual es $" + abonar)
}

precio (5000);

