
//comienzo el ecommerce haciendo los arrays de mis productos para poder mostralos en la página luego
const contenedorProductos = document.getElementById("contenedor-productos");
const verCarrito = document.getElementById("ver-carrito");
const modalContenido = document.getElementById("modal-header");
const cantidadCarrito = document.getElementById("cantidad-carrito");



const productos = [
     {  id: "cama-1",
        imagen: "../image/cama-1.jpg",
        nombre: "cama estilo polar",
        precio: 20000,
        cantidad: 1,

        },

    {
        id: "cama-2",
        nombre: "cama estilo estrellas",
        precio: 15000,
        imagen: "../image/cama-2.jpg",
        cantidad: 1,

    },

    {
        id: "cama-3",
        imagen: "../image/cama-3.jpg",
        precio: 25000,
        nombre: "cama estilo orejas ",
        cantidad: 1,

        },

    {
        id: "cama-4",
        nombre: "Cama estilo carpa",
        imagen:"../image/cama-4.webp" ,
        precio: 22000,
        cantidad: 1,


        },

    {
        id: "rascador-1",
        nombre: "Rascador felpa",
        imagen: "../image/rascador-1.webp",
        precio: 15500,
        cantidad: 1,


        },

    {
        id: "rascador-2",
        nombre: "Rascador con caja",
        imagen:"../image/rascador-2.jpg" ,
        precio: 18000,
        cantidad: 1,


        },

    {
        id: "rascador-3",
        nombre: "Rascador bicolor",
        imagen: "../image/rascador-3.jpg" ,
        precio: 16000,
        cantidad: 1,

        },
    

    {
        id: "manta-1",
        nombre: "Manta 1",
        imagen: "../image/manta-1.jpg" ,
        precio: 4000,
        cantidad: 1,


        },

    {
        id: "manta-2",
        nombre: "Manta 2",
        imagen: "../image/manta-2.jpg" ,
        precio: 5000,
        cantidad: 1,


        },

    {
        id: "manta-3",
        nombre: "Manta 3",
        imagen: "../image/manta-3.jpg" ,
        precio: 2800,
        cantidad: 1,


        },

];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];




//función para que se vean los productos:



    //foreach para que me recorra el array
    productos.forEach(producto => {

        //este será el div contenedor de cada producto:

        let content = document.createElement("div");
        content.innerHTML = ` 
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.nombre}</h3>
            <p class="producto-precio"> $ ${producto.precio}</p>
        </div>`;

        contenedorProductos.append(content);

    

        //agregó el boton de comprar:

        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "btn-comprar";

        content.append(comprar);

          //función para agregar los productos con un evento:

    comprar.addEventListener("click", () =>{

        //función para que me figure el producto por cantidades en numero:

        const repeat = carrito.some((repeatproducto) => repeatproducto.id === producto.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });
        } else {

        
        carrito.push({
            id: producto.id,
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,

        });

    }
    console.log(carrito);
    carritoContent();
    savelocal();

    });

       
    });

//función para que se visualicen mis productos comprados en la página a traves de un modal


//modal header

const pintarCarrito = () => {
    //funcion para actualizar el carrito y su contenido de compras
    modalContenido.innerHTML = "";
modalContenido.style.display = "flex";    
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = `
<h4 class="modal-header-titulo">Carrito</h4>`;

modalContenido.append(modalHeader);

const modalBtn = document.createElement("h4");
modalBtn.innerText = "x";
modalBtn.className = "modal-header-btn";

//funcion para que al tocar el boton x me cierre el modal

modalBtn.addEventListener("click" , () => {
    modalContenido.style.display = "none";
});




modalHeader.append(modalBtn);


//cuerpo de el modal:

carrito.forEach((producto) => {
    let carritoContent = document.createElement("div")

    carritoContent.className = "modal-body"
    carritoContent.innerHTML = `<img src="${producto.imagen}">
    <h3>${producto.nombre}</h3>
    <p> $ ${producto.precio} </p>
    <p> Cantidad: ${producto.cantidad} </p>
    <p> total: ${producto.cantidad * producto.precio} </p>


    `;


modalContenido.append(carritoContent);

//función para eliminar contenido de el carrito con un boton

let eliminar = document.createElement("span");

eliminar.innerText = "❌";
eliminar.className = "delete-producto";
carritoContent.append(eliminar);

eliminar.addEventListener("click", eliminarProducto);

});



//parte final de el modal que me indica el total de la compra,metodo reduce para que me sume las unidades de la compra y me de el total

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

//el html de la parte final de el modal

const totalCompra = document.createElement("div")
totalCompra.className = "total-contenido"
totalCompra.innerHTML = `total a pagar es: $ ${total} `;
modalContenido.append(totalCompra);


};

verCarrito.addEventListener("click", pintarCarrito);

//función para eliminar los productos:

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    pintarCarrito();
    carritoContent();
    savelocal();
};

//función para que un boton me vaya mostrando las cantidades a medida que se vayan agregando en el carrito

const carritoContent = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;

    const  carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))


    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};


//////////////////////LOCAL STORAGE///////////////////////////////////

//SET ITEM
const savelocal = () => {
localStorage.setItem("carrito",JSON.stringify(carrito));

};
carritoContent();

JSON.parse(localStorage.getItem("carrito"));


