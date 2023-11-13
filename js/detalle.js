document.addEventListener("DOMContentLoaded", function () {
    const misProductosJSON = localStorage.getItem('misProductos');
    const misProductos = JSON.parse(misProductosJSON) || [];
    console.log(misProductos);
   
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');


    if (idParam && !isNaN(idParam)) {
        
        const id = parseInt(idParam);

     
        const productoSeleccionado = misProductos.find(producto => producto.id === id);

        if (productoSeleccionado) {
           
            const tarjetaHtml = `
            <div class="col-12">
                <div class="card h-100 w-100 shadow-sm">
                   <div class="d-flex align-items-center justify-content-center">
                     <img src="${productoSeleccionado.src}" class="card-img-top w-50" alt="${productoSeleccionado.nombre}">
                </div>
                    <div class="card-body cat-body">
                        <h5 class="card-title text-center">${productoSeleccionado.nombre}</h5>
                        <p class="card-text">${productoSeleccionado.descripcion}</p>
                        <div class="d-flex justify-content-between">
                          <p class="fst-italic text-secondary">stock:${productoSeleccionado.stock} unidades</p>
                          <p class="fs-3 fst-italic text-dark ">$${productoSeleccionado.precio}</p>
                        </div>
                         <div class="d-flex justify-content-center"><button type="button" class="btn btn-outline-success btn-lg"    onclick="window.location.href='error404.html'">COMPRAR</button>
                         </div>
                    </div>
                </div>
            </div>
            `;

           
            document.getElementById("tarjeta-container").innerHTML = tarjetaHtml;
        } else {
            console.error('No se encontró un producto con el ID especificado');
        }
    } else {
        console.error('ID no válido');
    }
});

