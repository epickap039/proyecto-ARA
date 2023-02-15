const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarritoCA = document.getElementById("contenedorCarritoCA");
const carritoIMG = document.getElementById("carritoIMG");
const contadorcarrito = document.createElement("p");



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
let itemLocalStorage;

const agregarLocalstorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

// const eliminarLocalStorage = (clave, valor) => {
//     localStorage.removeItem(clave, JSON.stringify(valor));
// }

// const eliminartodoLocalStorage = localStorage.clear();

// function Cantidad() {
//     itemLocalStorage = JSON.parse(localStorage.getItem('carrito'));
//     console.log("este viene de el local  " + itemLocalStorage);
// }


const mostrarCarrito2 = () => {
    itemLocalStorage = JSON.parse(localStorage.getItem('carrito'));
    // console.log("este viene de el local  " + itemLocalStorage);
    contenedorCarritoCA.innerHTML = "";
    itemLocalStorage.forEach(servicio => {
        const div = document.createElement("div");
        div.classList.add("itemcarrito");
        div.innerHTML +=
            `
            <img class="imagenbote" src="${servicio.img}" alt="imagen de ${servicio.nombre}">
            <p>${servicio.nombre}</p>
            <p>$ ${servicio.precio} MXN</p>
            <p>Cantidad</p>
            <button class="eliminarcarrito" id="eliminardelcarrito${servicio.id}">
            <img class="iconbote" src="imagenes/bote.png" alt="imagen de ${servicio.nombre}">
            </button>
            `
        contenedorCarritoCA.appendChild(div);
        // const botonBorrarCarrito = document.getElementById(`eliminardelcarrito${servicio.id}`)
        // botonBorrarCarrito.addEventListener("click", () => {
        //     eliminarItemdeCarrito(servicio.id, carritoCompras);
        //     //estos no deberian estar aqui pero mientras veo como eliminar un item por separado necesito ver si funcionan
        //     AgregarContador();
        //     mostrarCarrito2();
        // });
    });
}




//---------------------Productos------------------------------------------------
const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot con 4 grados de libertad listo para uso personal/industrial" },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds Personalizados", precio: 500, descripcion: "Proyectos complejos o para uso personal autonomo" },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Audifonos recomendados por nuestros patrocinadores" },
    { id: 4, img: "../imagenes/im5.png", nombre: "Drones", precio: 6500, descripcion: "Drones con distintas caracteristicas segun sus necesidades" },
    { id: 5, img: "../imagenes/teclado.jpg", nombre: "Teclados ", precio: 1500, descripcion: "Teclados recomendados por nuestros patrocinadores" },
    { id: 6, img: "../imagenes/placa.jpg", nombre: "PLaca PCB ", precio: 500, descripcion: "Placa personalizada segun requiera, el costo aumenta segun los componentes" },
    { id: 7, img: "../imagenes/carro.jpg", nombre: "Vehiculos Personalizados ", precio: 3500, descripcion: "El vehiculo que siepre deseo pero en miniatura o no? " },

];

//----------------------------------------------------------------------------------------------------
const carritoCompras = [];


const agregarAlcarrito = (servicioSeleccionado, carrito) => {
    const servicioElegido = seviciosDesarrollador.find(item => item.id === servicioSeleccionado)
    carrito.push(servicioElegido);
    console.log("se agrego un producto al carrito", carritoCompras);
    agregarLocalstorage("carrito", carritoCompras);
    showAlert();
}



// const eliminarItemdeCarrito = (servicioSeleccionado, carrito) => {
//     const servicioElegidoEliminar = itemLocalStorage.find(item => item.id === servicioSeleccionado)
//     carrito.push(servicioElegidoEliminar);
//     eliminarLocalStorage("carrito", carritoCompras);
// }


//Contador de Items en el carrito
const AgregarContador = () => {
    if (carritoCompras.length !== 0) {
        carritoIMG.appendChild(contadorcarrito);
        contadorcarrito.classList.add("contadorCarrito");
        contadorcarrito.textContent = carritoCompras.length;
    }
}

//Mostrar en OFFcanvas=====================================================

// const mostrarCarrito = () => {
//     contenedorCarritoCA.innerHTML = "";
//     carritoCompras.forEach(servicio => {
//         const div = document.createElement("div");
//         div.classList.add("itemcarrito");
//         div.innerHTML +=
//             `
//             <img class="imagenbote" src="${servicio.img}" alt="imagen de ${servicio.nombre}">
//             <p>${servicio.nombre}</p>
//             <p>$ ${servicio.precio} MXN</p>
//             <p>Cantidad</p>
//             <button class="eliminarcarrito" id="eliminardelcarrito${servicio.id}">
//             <img class="iconbote" src="imagenes/bote.png" alt="imagen de ${servicio.nombre}">
//             </button>
//             `
//         contenedorCarritoCA.appendChild(div);
//     })
// }



//agregar al carrito en index

seviciosDesarrollador.forEach(servicio => {
    const div = document.createElement("div");
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
        AgregarContador();
        mostrarCarrito2();
        // Cantidad();
    })
});


