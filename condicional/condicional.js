var Number = prompt('Por Favor Ingrese su edad');

let edad = Number
if (edad >= 18) {
    alert('Acceso Valido')
    console.log('Acceso Valido')
}
else {
    10
    alert('Acceso Denegado')
    console.log('Acceso Denegado')
}


const AccesosUsuarios = [
    { id: 0, nombre: "Alejandro ", acceso: "valido", contrasena: "tacontento" },
    { id: 1, nombre: "Paco ", acceso: "valido", contrasena: "tenisazules" },
    { id: 2, nombre: "Variable ", acceso: "invalido", contrasena: "no-data" },
    { id: 3, nombre: "Kath ", acceso: "valido", contrasena: "epickelmejor" },
];

for (i = 0; i < AccesosUsuarios.length; i++) {
    console.log('Los ususarios registrados son ', AccesosUsuarios[i]);
}

let EdadCine =Number;

switch (EdadCine) {
    case 14:
        console.log('Tu descuento es de 40%');
        break;
    case 18:
        console.log('Tu descuento es de 55%');
        break;
    case 20:
        console.log('Tu descuento es de 23%');
        break;
    case 21:
        console.log('Tu descuento es de 30%');
        break;
    default:
        console.log('Edad no Valida para promocion');
        break;
}