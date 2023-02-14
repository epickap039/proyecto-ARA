

const lista = document.querySelector('#listado');

fetch('./data.json')
.then((res) => res.json())
.then((data) => {
    data.forEach((produco) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <p>Nombre ${produco.name}</p>
        <p>correo ${produco.email}</p>
        <p>telefono ${produco.phone}</p>
        `
        lista.append(li)
    });
})