//simulo una base de datos o una api externa con el nombre de los colaboradores
//del refugio:

const listaColaboradores = document.querySelector("#lista-colaboradores");

fetch("../js/colaboradores.json")

.then(response => response.json())
.then(data => {
    data.forEach(colaboradores => {
        const li = document.createElement("li");
        li.innerText = colaboradores.nombre + " - " + colaboradores.localidad;
        listaColaboradores.append(li);
        
    });
})