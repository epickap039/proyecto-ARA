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
        carritoIMG.appendChild(contadorcarrito);    // esto esta mal pro funciona lo arreglare mas tarde 
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
        <p>$ ${servicio.precio} MXN</p>
        <p>Cantidad: ${servicio.cantidad}</p>
        <p>Total: ${servicio.cantidad * servicio.precio}</p>
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
        agregarLocalstorage('carrito', carritoCompras);
    })
}
//agregar al carrito en index

const eliminarProducto = (servicioSeleccionado, carrito) => {
    const BuscarID = carritoCompras.find((elmeento) => elmeento.id === servicioSeleccionado);
    carritoCompras = carritoCompras.filter((carritoID) => {
        return carritoID !== BuscarID;
    })
    carrito.push(carritoCompras);
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
        alert('ingrese un usuario valido');
    } else {
        if (inputC.value === '') {
            alert('ingrese una contraseña valida');
        } else {
            if (inputC.value !== inputCC.value) {
                alert('Las contraseñas no coinciden')
            } else {
                fetch("./scripts/data.json")
                    .then((res) => res.json())
                    .then((data) => {
                        const elementoEncontrado = data.find(item => item.name === inputU.value);
                        if (elementoEncontrado !== undefined) {
                            alert('el Usuario ya existe');
                        } else {
                            alert('Registro exitoso');
                            window.location = "index.html";
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
                    alert('Registro Exitoso');
                    window.location = "index.html";
                } else {
                    alert('contraseña incorrecta');
                    inputU.value = '';
                    inputC.value = '';
                }
            } else {
                alert('NO existe el Usuario');
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
