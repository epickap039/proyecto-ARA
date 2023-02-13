const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorCarritoCA = document.getElementById("contenedorCarritoCA");
const carritoIMG = document.getElementById("carritoIMG");
const alertContainer = document.getElementById("alert");
const contadorcarrito = document.createElement("p");

const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot con 4 grados de libertad listo para uso personal/industrial" },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds Personalizados", precio: 500, descripcion: "Proyectos complejos o para uso personal autonomo" },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Audifonos recomendados por nuestros patrocinadores" },
    { id: 4, img: "../imagenes/im5.png", nombre: "Drones", precio: 6500, descripcion: "Drones con distintas caracteristicas segun sus necesidades" },
    { id: 5, img: "../imagenes/teclado.jpg", nombre: "Teclados ", precio: 1500, descripcion: "Teclados recomendados por nuestros patrocinadores" },
    { id: 6, img: "../imagenes/placa.jpg", nombre: "PLaca PCB ", precio: 500, descripcion: "Placa personalizada segun requiera, el costo aumenta segun los componentes" },
    { id: 7, img: "../imagenes/carro.jpg", nombre: "Vehiculos Personalizados ", precio: 3500, descripcion: "El vehiculo que siepre deseo pero en miniatura o no? " },

];

const carritoCompras = [];


const agregarAlcarrito = (servicioSeleccionado, carrito) => {
    const servicioElegido = seviciosDesarrollador.find(item => item.id === servicioSeleccionado)
    carrito.push(servicioElegido);
    showAlert();
    console.log("se agrego un producto al carrito", carritoCompras);
    agregarLocalstorage("carrito", carritoCompras);
}

const AgregarContador = () => {
    if (carritoCompras.length !== 0) {
        carritoIMG.appendChild(contadorcarrito);
        contadorcarrito.classList.add("contadorCarrito");
        contadorcarrito.textContent = carritoCompras.length;
    }
}


const mostrarCarrito = () => {
    contenedorCarritoCA.innerHTML = "";
    carritoCompras.forEach(servicio => {
        const div = document.createElement("div");
        div.classList.add("itemcarrito");
        div.innerHTML =
            `
            <img class="imagenbote" src="${servicio.img}" alt="imagen de ${servicio.nombre}">
            <p>${servicio.nombre}</p>
            <p>Precio: ${servicio.precio} MXN</p>
            <button class="eliminarcarrito" id="eliminar${servicio.id}"><img class="iconbote" src="imagenes/bote.png" alt="imagen de.."> </button>
            `

        contenedorCarritoCA.appendChild(div);
    })
}

const agregarLocalstorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

// JSON.parse(localStorage.getItem("carrito"));
// window.localStorage.getItem("carrito");


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
        mostrarCarrito();
    })
});



function showAlert() {
    alertContainer.style.display = "block";
    setTimeout(function () {
        alertContainer.style.display = "none";
    }, 2000);
}

