const tBody = document.getElementById("tBody")

fetch("https://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(datos => {
        datos.forEach((datos, indice) => {
            tBody.innerHTML += `
            <tr id="datos${indice + 1}" class="articulo">
                <th scope="row">${indice + 1}</th>
                <td>${datos.actor}</td>
                <td>${datos.name}</td>
                <td>${datos.species}</td>
                <td>${datos.gender}</td>
                <td>${datos.house}</td>
                <td><img src="${datos.image}"></img></td>
            </tr>
        `
        })
    })

document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        document.querySelectorAll(".articulo").forEach(personaje => {

            personaje.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? personaje.classList.remove("filtro")
                : personaje.classList.add("filtro")
        })

    }


})

