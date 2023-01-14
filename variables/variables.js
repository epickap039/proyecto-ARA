let bueno = 0;
var cuantasVeces = 0;
var elsujetoes;
var saludo = "Hola Bienvenido";
console.log(saludo);

let vrLimitada = "ayudanos un poco mas";
console.log(vrLimitada);

const vrConstante = "Ahora ayudanos a saber que tan bueno eres para la lista de santa";
console.log(vrConstante);

var nombre = prompt("Cual es tu nombre?");
console.log(nombre);
alert(vrLimitada);
var apellido = prompt("cual es tu primer apellido");
console.log(apellido);

var saludoCompleto = `${saludo} ${nombre} ${apellido} esto es una prueba `;
alert(saludoCompleto);

alert(vrConstante);

var cuantasVeces = prompt("cuantas veces saliste de fiesta este año?");
alert("procesando....");
var eresBueno = prompt("Eres bueno? por favor respoda con si o no");
alert("quieres saber tu resultado?");
if (eresBueno == "si") {
    bueno = 50;
    elsujetoes = "bueno";
} else {
    bueno = 10;
    elsujetoes = "malo";
}
var suma = (parseInt(cuantasVeces) + parseInt(bueno));
alert("procesando 2.0 ...");

var felicidades = `felicidades eres ${suma}% ${elsujetoes}`;
alert(felicidades);