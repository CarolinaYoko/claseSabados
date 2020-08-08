/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

function mostrar() {
	alert("Esto funciona de Maravilla");
}
/*
------------------------------------------------------------------------------------

Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()*/

let sexo;
let altura = 0;
let edad = 0;
let nombre;
let BanderadelprimeroMaltura = "es el primero";
let AlturaMmax; //los max y min NUNCA se inicializan
let NombreMmax;
let BanderadelprimeroHedad = "es el primero";
let EdadHmax;
let NombreHmax;
let BanderadelprimeroAdol = "es el primero";
let Nomadolescente;

do {
	sexo = prompt("Ingrese su sexo: M o H");
	altura = parseInt(prompt("Ingrese su altura en centìmetros"));
	edad = parseInt(prompt("Ingrese su Edad"));
	nombre = prompt("Ingrese su nombre");

	switch (sexo) {
		case "M":
			alert("ingresaste M");

			if (BanderadelprimeroMaltura == "es el primero") {
				BanderadelprimeroMaltura = "ya paso";
				AlturaMmax = altura;
				NombreMmax = nombre;

				
			} else {
				if (altura > AlturaMmax) {
					AlturaMmax = altura;
					NombreMmax = nombre;
				}
			}
			break;

		case "H":
			if (BanderadelprimeroHedad == "es el primero") {
				BanderadelprimeroHedad = "ya paso";
				EdadHmax = edad;
				NombreHmax = nombre;
			} else {
				if (edad > EdadHmax) {
					EdadHmax = edad;
					NombreHmax = nombre;
				}
			}
			break;

	}

	if (BanderadelprimeroAdol == "es el primero" && (edad > 12 && edad < 18)) 
	{
		BanderadelprimeroAdol = "ya paso";
		Nomadolescente = nombre;
	}

	respuesta = prompt("¿desea ingresar otro alumno? s/n");

} while (respuesta == "s");

if (BanderadelprimeroMaltura == "es el primero") {
	console.log("no se cargo ninguna mujer");
}
else {
	console.log("el nombre de la más alta de las mujeres es: " + NombreMmax);
}

if (BanderadelprimeroHedad == "es el primero") {
	console.log("no se cargo ningún hombre");
}
else {
	console.log("el nombre del  más viejo de los hombres es: " + NombreHmax);
}

if (BanderadelprimeroAdol == "es el primero") {
	console.log("no se cargo ningún adolescente");
}
else {
	console.log("el nombre del primer adolescente ingresado es: " + Nomadolescente);
}




