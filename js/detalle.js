document.addEventListener("DOMContentLoaded", function() {
    const misProductosJSON = localStorage.getItem('misProductos');
    const misProductos = JSON.parse(misProductosJSON) || [];

    // Obtener el parámetro 'id' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');

    // Verificar si 'idParam' existe y es un número
    if (idParam && !isNaN(idParam)) {
        // Convertir 'idParam' a un número
        const id = parseInt(idParam);

        // Buscar el objeto en 'misProductos' con el ID correspondiente
        const productoSeleccionado = misProductos.find(producto => producto.id === id);

        if (productoSeleccionado) {
            // Generar la tarjeta HTML
            const tarjetaHtml = `
                <div class="card mb-5">
                    <img src="${productoSeleccionado.src}" class="card-img-top" alt="Imagen del producto">
                    <div class="card-body">
                        <h5 class="card-title">${productoSeleccionado.nombre}</h5>
                        <p class="card-text">${productoSeleccionado.descripcion}</p>
                        <p class="card-text"><h4 class="fs-3 fst-italic text-info">$${productoSeleccionado.precio}</h4></p>
                        <p><h5>Stock:20</h5></p>
                        <button><span>COMPRAR</span></button>
                    </div>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            document.getElementById("tarjeta-container").innerHTML = tarjetaHtml;
        } else {
            console.error('No se encontró un producto con el ID especificado');
        }
    } else {
        console.error('ID no válido');
    }
});

