let celulares = [
    { marca: 'Oppo', stock: 22, precio: 9000.34 },
    { marca: 'Redmi', stock: 32, precio: 6000.23 },
    { marca: 'Samsung', stock: 12, precio: 12000.234 },
    { marca: 'Lg', stock: 2, precio: 6050.123 },
    { marca: 'Iphone', stock: 23, precio: 19000.42 },
    { marca: 'Motorola', stock: 45, precio: 8000.5 }
]

celulares.forEach(nombresMarc => {
    console.log(nombresMarc.marca + ' stock: ' + nombresMarc.stock)
});

let celularesPrecio = celulares.filter(costo => costo.precio > 7000)
for (i = 0; i < celularesPrecio.length; i++) {
    console.log('Los celulares con mayor costo a 7000 son ', celularesPrecio[i]);
}

let ordenar = celulares.sort((a, b) => {
    if (a.marca == b.marca) {
        return 0;
    }
    if (a.marca < b.marca) {
        return -1;
    }
    return 1;
});
console.log('Ordenados ----------------- ')
for (i = 0; i < ordenar.length; i++) {
    console.log(' ', ordenar[i]);
}

let ordenarCosto = celulares.sort((a, b) => {
    if (a.precio == b.precio) {
        return 0;
    }
    if (b.precio < a.precio) {
        return -1;
    }
    return 1;
})
console.log('Mas caro  ----------------- ')
console.log('El mas caro es  ', ordenarCosto[0])

