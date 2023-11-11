
const cont = document.querySelector("#contenedor-resultado");
let queryString = window.location.search;
let urlParametro = new URLSearchParams(queryString);
let terminoDeBusqueda = urlParametro.get('q');
console.log("el paramtero es: ", terminoDeBusqueda, typeof(terminoDeBusqueda));
const todosLosProductos = misProductos.obtener();
console.log("todosLosProductos: ",todosLosProductos);

filtrarProductos(terminoDeBusqueda);

function filtrarProductos(terminoDeBusqueda) {
    console.log("estamos dentro del filtro");
    const productosFiltrados = todosLosProductos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(terminoDeBusqueda) ||
        producto.categoria.toLowerCase().includes(terminoDeBusqueda)
    );
    console.log("productosRelacionadosConLaBusqueda: ", productosFiltrados);
  
    renderizarProductos(productosFiltrados);
  }
function renderizarProductos(productos) {
    if (!productos || !Array.isArray(productos) || productos.length === 0) {
      console.log("Los datos ingresados son inválidos o no hay resultados");
      return;
    }
  
    let contenidoHTML = "";
  
    productos.forEach((producto) => {
      contenidoHTML += `
        <div class="col productos">
          <div class="p-3">
            <div id="card-2" class="card">
              <img src="${producto.src}" class="card-img-top" alt="${producto.nombre}" />
              <div class="card-body d-flex flex-column justify-content-between h-100">
                <h5 class="card-title">${producto.nombre}</h5>
                <a href="./detalle.html?id=${producto.id}" class="btn btn-primary">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>`;
    });
  
    cont.innerHTML = contenidoHTML;
  }



