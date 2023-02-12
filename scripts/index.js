const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot con 4 grados de libertad listo para uso personal/industrial" },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds Personalizados", precio: 500, descripcion: "Proyectos complejos o para uso personal autonomo" },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Audifonos recomendados por nuestros patrocinadores" },
    { id: 4, img: "../imagenes/im5.png", nombre: "Drones", precio: 6500, descripcion: "Drones con distintas caracteristicas segun sus necesidades" },
    { id: 5, img: "../imagenes/teclado.jpg", nombre: "Teclados ", precio: 1500, descripcion: "Teclados recomendados por nuestros patrocinadores" },
    { id: 6, img: "../imagenes/placa.jpg", nombre: "PLaca PCB ", precio: 500, descripcion: "Placa personalizada segun requiera, el costo aumenta segun los componentes" },
    { id: 7, img: "../imagenes/carro.jpg", nombre: "Vehiculos Personalizados ", precio: 3500, descripcion: "El vehiculo que siepre deseo pero en miniatura o no? " },

];
console.log(document);

const carritoCompras = [];

const contenedorProductos = document.getElementById("contenedorProductos");
const carritoIMG = document.getElementById("carritoIMG");

seviciosDesarrollador.forEach(servico => {
    contenedorProductos.innerHTML +=
        `
    <div class="product-card" >
    <img src="${servico.img}" alt="${servico.nombre}">
    <h3 class="product-title">${servico.nombre}</h3>
    <p class="product-description">${servico.descripcion}</p>
    <div class="product-price">$ ${servico.precio} MXN</div>
    <button id="${servico.id}" class="add-to-cart-button">Agregar al Carrito</button>
    </div>
    `
});


const agregarAlcarrito = (producto, carrito) => {
    carrito.push(producto);
    console.log("se agrego un producto al carrito");
}

// agregarAlcarrito(seviciosDesarrollador[1], carritoCompras);
// agregarAlcarrito(seviciosDesarrollador[3], carritoCompras);

const contadorcarrito = document.createElement("p");
contadorcarrito.textContent = carritoCompras.length;
contadorcarrito.classList.add("contadorCarrito");

if(carritoCompras.length !==0){
    carritoIMG.appendChild(contadorcarrito);
}