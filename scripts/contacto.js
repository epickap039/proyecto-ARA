
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
//---------------Local storage--------------------------------------------------------------
const agregarLocalstorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor));
}

//---------------------Productos------------------------------------------------
const seviciosDesarrollador = [
    { id: 1, img: "../imagenes/brazo robot.jfif", nombre: "Brazo robot", precio: 20000, descripcion: "Brazo robot listo para uso personal/industrial", cantidad: 1 },
    { id: 2, img: "../imagenes/leds.jpg", nombre: "Leds", precio: 500, descripcion: "Proyectos complejos o para uso personal", cantidad: 1 },
    { id: 3, img: "../imagenes/audifonos.jpg", nombre: "Audifonos ", precio: 2500, descripcion: "Alta calidad de Audio y sonido 3D", cantidad: 1 },
    { id: 4, img: "../imagenes/im5.png", nombre: "Drones", precio: 6500, descripcion: "Drones perzonalicacion completa", cantidad: 1 },
    { id: 5, img: "../imagenes/teclado.jpg", nombre: "Teclados ", precio: 1500, descripcion: "Teclado con retroiluminacion 7 colores", cantidad: 1 },
    { id: 6, img: "../imagenes/placa.jpg", nombre: "PLaca PCB ", precio: 500, descripcion: "Placa personalizada el costo aumenta segun los componentes", cantidad: 1 },
    { id: 7, img: "../imagenes/cpu3.jpg", nombre: "cpu black", precio: 5200, descripcion: "CPU gamer con tarjeta de video", cantidad: 1 },
    { id: 8, img: "../imagenes/luces.jpg", nombre: "Tira de leds", precio: 500, descripcion: "Tira de leds rgb con un largo de 10m", cantidad: 1 },
    { id: 9, img: "../imagenes/mouse.jpg", nombre: "Mouse gamer", precio: 1200, descripcion: "Mouse gamer inhalambrico", cantidad: 1 },
    { id: 10, img: "../imagenes/hph.jpg", nombre: "Audifonos negros", precio: 4500, descripcion: "Audifonos profesionales con supresión de ruido exterior", cantidad: 1 },
    { id: 11, img: "../imagenes/carro.jpg", nombre: "Carrito", precio: 3500, descripcion: "El vehiculo que siepre deseo pero en miniatura o no? ", cantidad: 1 },
    { id: 12, img: "../imagenes/control.jpg", nombre: "Control gamer", precio: 1200, descripcion: "Control de PS4 con diseño personalizado con temática de zombies", cantidad: 1 },
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
        <div class="nomprecio">
        <p>${servicio.nombre}</p>
        <p>$${servicio.precio} MXN</p>
        <p>Cant: ${servicio.cantidad}</p>
        </div>
        <p>Total: ${servicio.cantidad * servicio.precio}</p>
        <img id="cant${servicio.id}" class="botonAgregarExtra" src="imagenes/mas.png" alt="imagen de agregar mas productos">
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
    if (carritoCompras.length !== 0) {
        const boton = document.createElement("button");
        boton.setAttribute('id', 'comprar');
        boton.setAttribute('onclick', 'comprar()');
        boton.textContent = 'comprar';
        contenedorCarritoCA.appendChild(boton);
    }

}

//-------Boton de comprar---------

function comprar() {
    carritoCompras.map((prod) => {
        prod.cantidad = 1;
        })
        
        swal("gracias por tu compra", "Seguir Comprando", "success");
        carritoCompras = []
        localStorage.removeItem('carrito');
        console.log(carritoCompras);
        mostrarCarrito();
        AgregarContador();
        contenedorCarritoCA.innerHTML = '';
    };


//---------------Alerta de agregado-------------------------------------------
const alertContainer = document.getElementById("alert");


function showAlert() {
    alertContainer.style.display = "block";
    setTimeout(function () {
        alertContainer.style.display = "none";
    }, 2000);
}

//-------------------agregar mas producto o eliminar producto----------------------
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
    console.log(servicioSeleccionado);
    carritoCompras.map((prod) => {
        if (servicioSeleccionado === prod.id) {
            if (prod.cantidad > 1) {
                prod.cantidad--;
            } else {
                carritoCompras = carritoCompras.filter((carritoID) => {
                    return carritoID !== BuscarID;
                })
                carrito.push(carritoCompras);
            }
        }
    });
    mostrarCarrito();
}




//===================================formulario==================================================================================


const registrate = document.getElementById('registrate');
const spanEntrar = document.getElementById('spanEntrar');
const divBoton = document.getElementById('divBoton');
const login = document.getElementById('login');
const confirmarC = document.getElementById('confirmarC');
//-------------Valores de Input-------------------------//
let inputU = document.querySelector('#inputU');
let inputC = document.querySelector('#inputC');
let inputCC = document.querySelector('#inputCC');
//-------------Botones-------------------------------//
const crearBotonRegistro = document.getElementById('crearRegistro')
const entrarRegistro = document.getElementById('entrarRegistro');
const entrarBoton = document.getElementById('entrarLogin');


registrate.addEventListener('click', () => {
    divBoton.remove('div');
    login.innerText = "Registrate";
    spanEntrar.innerText = "Registrar";
    crearBotonRegistro.classList.add("visibleBotonEntrar");
    confirmarC.classList.add("visibleBotonEntrar");
    inputU.value = '';
    inputC.value = '';
    inputCC.value = '';
})

entrarRegistro.addEventListener('click', () => {
    if (inputU.value === '') {
        swal('ingrese un usuario valido');
    } else {
        if (inputC.value === '') {
            swal('ingrese una contraseña valida');
        } else {
            if (inputC.value !== inputCC.value) {
                swal('Las contraseñas no coinciden')
            } else {
                fetch("./scripts/data.json")
                    .then((res) => res.json())
                    .then((data) => {
                        const elementoEncontrado = data.find(item => item.name === inputU.value);
                        if (elementoEncontrado !== undefined) {
                            swal('el Usuario ya existe');
                        } else {
                            swal('Registro exitoso');
                            setTimeout(window.location = "index.html", 6000);

                        }
                    });
            }
        }
    }
});

entrarBoton.addEventListener('click', () => {
    fetch("./scripts/data.json")
        .then((res) => res.json())
        .then((data) => {
            const elementoEncontrado = data.find(item => item.name === inputU.value);
            console.log(elementoEncontrado);
            if (elementoEncontrado !== undefined) {
                const nameJson = elementoEncontrado.name;
                const contraJson = elementoEncontrado.contra;
                console.log(nameJson);
                console.log(contraJson);
                if (inputC.value === contraJson) {
                    swal('Acceso Exitoso');
                    setTimeout(window.location = "index.html", 6000);
                } else {
                    swal('contraseña incorrecta');
                    inputU.value = '';
                    inputC.value = '';
                }
            } else {
                swal('NO existe el Usuario');
            }
        })
})


//---------------------para enviar datos se necesita habilitat HTTP
// const Datos = {
//     name: 'hola',
//     username: "probando"
// }
// fetch("./AJAX/data.json", {
//     method: 'POST',
//     body: JSON.stringify(Datos),
//     headers: {
//         'Content-Type': 'application/json'
//     },
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



//=====================================================================================================================================


window.addEventListener('load', () => {
    mostrarCarrito();
    AgregarContador();
})
