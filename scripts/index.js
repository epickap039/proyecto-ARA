const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot con 4 grados de libertad listo para uso personal/industrial" },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds Personalizados", precio: 500, descripcion:"Proyectos complejos o para uso personal autonomo" },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Audifonos recomendados por nuestros patrocinadores" }

];
console.log(document);

const carritoCompras = [];

const contenedorProductos = document.getElementById("contenedorProductos");

seviciosDesarrollador.forEach(servico => {
    contenedorProductos.innerHTML += 
    `
    <div class="product-card" >
    <img src="${servico.img}" alt="${servico.nombre}">
    <h3 class="product-title">${servico.nombre}</h3>
    <p class="product-description">${servico.descripcion}</p>
    <div class="product-price">${servico.precio}</div>
    <button id="${servico.id}" class="add-to-cart-button">Agregar al Carrito</button>
</div>
    `
});