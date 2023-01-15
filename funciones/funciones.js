function suma(a, b, c) {
    let resultado = a + b + c;
    console.log("funcion: " + resultado);
}

suma(25, 35, 40);

var sondif = "iguales";
var resultado2

function comparacion(d, e) {

    if (d === e) {
        resultado2 = `Los operadores son ${sondif}`;
    } else if (d !== e) {
        sondif = "diferentes";
        if (Number(d) > Number(e)) {
            resultado2 = `Los operadores son numeros ${sondif} y ${d} es mayor`;
        }
        else if (Number(d) < Number(e)) {
            resultado2 = `Los operadores son numeros ${sondif} y ${e} es mayor`;
        }
        else {
            resultado2 = "Los operadores no son del mismo tipo"
        }
    }
    console.log("funcion: " + resultado2);
}

comparacion(0, 6);

const suma2 = (f, g, h) => f + g + h;
console.log("flecha:  " + suma2(10, 23, 32));


var resultado3
var sondif2 = "iguales"
var igual = true
var i = 55
var j = 55

var comparacion2 = (igual) => {
    if (i === j) {
        resultado3 = `Los operadores son ${sondif2}`;
    } else if (i !== j) {
        sondif2 = "diferentes";
        if (Number(i) > Number(j)) {
            resultado3 = `Los operadores son numeros ${sondif2} y ${i} es mayor`;
        }
        else if (Number(i) < Number(j)) {
            resultado3 = `Los operadores son numeros ${sondif2} y ${j} es mayor`;
        }
        else {
            resultado3 = "los operadores no son del mismo tipo"
            igual = false
        }
    }
    return igual
}
comparacion2(igual) == true ? console.log(`flecha:  ${resultado3}`) : console.log(`flecha:  no se puede operar ${resultado3}`);



let preferenciasUsuario = {
    deporte: 'e-sports',
    musica: 'de todo un poco',
    videojuego: 'valorant'
}

const usuario2 = {
    nombre: 'Alejandro',
    email: 'trendohacker@tostada.com',
    pais: 'Tlaxcala',
    acceso: true,
    salud: {
        edad: 250,
        sexo: 'dias festivos',
        peso: 70
    },
    gustos: preferenciasUsuario
}
console.log("objetos: " + usuario2.salud.edad)

const { pais, gustos, acceso } = usuario2;
console.log("desestructuración: " + pais, gustos.videojuego, acceso)

const miprimerArrayenjavaxd = ['Buenos Dias', true, 12, [2, 'taco'], 'azucar', 44];
console.log("Array: " + miprimerArrayenjavaxd[4])

const [saludo, acceso2, dia] = miprimerArrayenjavaxd;
console.log("Array desestructuración: " + saludo, acceso2, dia)