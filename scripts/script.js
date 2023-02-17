const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarritoCA = document.getElementById("contenedorCarritoCA");
const carritoIMG = document.getElementById("carritoIMG");
const contadorcarrito = document.createElement("p");
let existeComprar;
let comprarB;

//---------Botones del Menu Hamburguesa------------------------------------
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//---------------Alerta de agregado-------------------------------------------
const alertContainer = document.getElementById("alert");


function showAlert() {
    alertContainer.style.display = "block";
    setTimeout(function () {
        alertContainer.style.display = "none";
    }, 2000);
}

//---------------Local storage--------------------------------------------------------------
const agregarLocalstorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

//---------------------Productos------------------------------------------------
const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot con 4 grados de libertad listo para uso personal/industrial", cantidad: 1 },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds Personalizados", precio: 500, descripcion: "Proyectos complejos o para uso personal autonomo", cantidad: 1 },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Audifonos recomendados por nuestros patrocinadores", cantidad: 1 },
    { id: 4, img: "../imagenes/im5.png", nombre: "Drones", precio: 6500, descripcion: "Drones con distintas caracteristicas segun sus necesidades", cantidad: 1 },
    { id: 5, img: "../imagenes/teclado.jpg", nombre: "Teclados ", precio: 1500, descripcion: "Teclados recomendados por nuestros patrocinadores", cantidad: 1 },
    { id: 6, img: "../imagenes/placa.jpg", nombre: "PLaca PCB ", precio: 500, descripcion: "Placa personalizada segun requiera, el costo aumenta segun los componentes", cantidad: 1 },
    { id: 7, img: "../imagenes/carro.jpg", nombre: "Vehiculos Personalizados ", precio: 3500, descripcion: "El vehiculo que siepre deseo pero en miniatura o no? ", cantidad: 1 },

];

//----------------------------------------------------------------------------------------------------
let carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];

//Contador de Items en el carrito
const AgregarContador = () => {
    if (carritoCompras.length !== 0) {
        carritoIMG.appendChild(contadorcarrito);
        contadorcarrito.classList.add("contadorCarrito");
        contadorcarrito.textContent = carritoCompras.length;
    }
    else {
        carritoIMG.appendChild(contadorcarrito);
        carritoIMG.removeChild(contadorcarrito);
    }
}

// Mostrar en OFFcanvas=====================================================

const mostrarCarrito = () => {
    contenedorCarritoCA.innerHTML = "";
    carritoCompras.forEach(servicio => {
        const div = document.createElement("div");
        div.classList.add("itemcarrito");
        div.innerHTML =
            `
        <img class="imagenbote" src="${servicio.img}" alt="imagen de ${servicio.nombre}">
        <p>${servicio.nombre}</p>
        <p>$${servicio.precio} MXN</p>
        <p>Cant: ${servicio.cantidad}</p>
        <p>Total:${servicio.cantidad * servicio.precio}</p>
        <button id="cant${servicio.id}">Mas</button>
        `
        contenedorCarritoCA.appendChild(div);
        let eliminar = document.createElement("div");
        eliminar.innerHTML = `<img class="iconbote" src="imagenes/bote.png" alt="imagen de ${servicio.nombre}">`
        eliminar.className = `eliminarcarrito${servicio.id}`;
        div.append(eliminar);
        eliminar.addEventListener("click", () => {
            eliminarProducto(servicio.id, carritoCompras);
            agregarLocalstorage('carrito', carritoCompras);
            AgregarContador();
        });
        const botonagregarMAS = document.getElementById(`cant${servicio.id}`);
        botonagregarMAS.addEventListener('click', () => {
            agregarAlcarrito(servicio.id, carritoCompras);
            mostrarCarrito();
        });
        agregarLocalstorage('carrito', carritoCompras);
    })
    const boton = document.createElement("button");
    boton.setAttribute('id', 'comprar');
    boton.textContent = 'comprar';
    existeComprar = 1;
    contenedorCarritoCA.appendChild(boton);
}

//-------Boton de comprar---------
// if (existeComprar === 1) {
//     comprarB = document.getElementById('comprar');
//     console.log(comprarB);
    
//     comprarB.addEventListener('click', () => {
//         localStorage.clear(); //simula que os productos pasaron al servidor
//         mostrarCarrito();
//         alert('gracias por tu compra')
//     })
// } else {
//     existeComprar = 0;
// }

//agregar al carrito en index

seviciosDesarrollador.forEach(servicio => {
    const div = document.createElement("div");
    div.setAttribute('id', `producto${servicio.id}`)
    div.innerHTML =
        `
    <div class="product-card" >    
    <img src="${servicio.img}" alt="${servicio.nombre}">
    <h3 class="product-title">${servicio.nombre}</h3>
    <p class="product-description">${servicio.descripcion}</p>
    <div class="product-price">$ ${servicio.precio} MXN</div>
    <button id="producto${servicio.id}" class="add-to-cart-button">Agregar al Carrito</button>
    </div>
    `
    contenedorProductos.appendChild(div);
    const botonAgregarCarrito = document.getElementById(`producto${servicio.id}`)
    botonAgregarCarrito.addEventListener("click", () => {
        agregarAlcarrito(servicio.id, carritoCompras);
        console.log("este es el de agregar al carrito " + servicio.id)
        AgregarContador();
        mostrarCarrito();

    })
});

const agregarAlcarrito = (servicioSeleccionado, carrito) => {
    const servicioElegido = seviciosDesarrollador.find(item => item.id === servicioSeleccionado);
    const repetido = carritoCompras.some((productoRepetido) => productoRepetido.id === servicioSeleccionado);

    if (repetido) {
        carritoCompras.map((prod) => {
            if (prod.id === servicioSeleccionado) {
                prod.cantidad++;
            }
        })
    } else {
        carrito.push(servicioElegido);
    }
    showAlert();
}

const eliminarProducto = (servicioSeleccionado, carrito) => {
    const BuscarID = carritoCompras.find((elmeento) => elmeento.id === servicioSeleccionado);
    carritoCompras = carritoCompras.filter((carritoID) => {
        return carritoID !== BuscarID;
    })
    carrito.push(carritoCompras);
    mostrarCarrito();
}

window.addEventListener('load', () => {
    mostrarCarrito();
    AgregarContador();
})

//--------------------------------Ordenar--------------------------------------

const ordenarP = document.getElementById('ordenarP');
const dropdown = document.getElementById("myDropdown");
let selectedOption;

function ordenarMm() {
    seviciosDesarrollador.sort((a, b) => {
        if (a.precio == b.precio) {
            return 0;
        }
        if (b.precio < a.precio) {
            return -1;
        }
        return 1;
    });
}
function ordenarmM() {
    seviciosDesarrollador.sort((a, b) => {
        if (a.precio == b.precio) {
            return 0;
        }
        if (a.precio < b.precio) {
            return -1;
        }
        return 1;
    });
}

dropdown.addEventListener("change", function () {
    selectedOption = dropdown.value;
    console.log("La opción seleccionada es " + selectedOption);
});

ordenarP.addEventListener('click', () => {
    contenedorProductos.innerHTML = '';
    if (selectedOption === 'optionMm') {
        ordenarMm();
    }
    if (selectedOption === 'optionmM') {
        ordenarmM();
    }


    seviciosDesarrollador.forEach(servicio => {
        const div2 = document.createElement("div");
        div2.innerHTML =
            `
    <div class="product-card" >    
    <img src="${servicio.img}" alt="${servicio.nombre}">
    <h3 class="product-title">${servicio.nombre}</h3>
    <p class="product-description">${servicio.descripcion}</p>
    <div class="product-price">$ ${servicio.precio} MXN</div>
    <button id="producto${servicio.id}" class="add-to-cart-button">Agregar al Carrito</button>
    </div>
    `
        contenedorProductos.appendChild(div2);
    });
    mostrarCarrito();
});
