let contenedor = document.querySelector("#productosDestacados");

function visualizarProductos() {
  let produc = misProductos.obtener();
  
  produc.map((producto) => {
    contenedor.innerHTML += `
        <div class="col productos">
            <div class="p-3">
              <div id="card-2" class="card">
                <img src="${producto.src}" class="card-img-top"
                  alt="${producto.nombre}" />
                <div class="card-body d-flex flex-column justify-content-between h-100">
                  <h5 class="card-title">
                    ${producto.nombre}
                  </h5>
                  <a href="./detalle.html?id=${producto.id}" class="btn btn-primary">Ver detalles</a>
                </div>
              </div>
            </div>
          </div>
          `
  })
}
visualizarProductos();

const todosLosProductos = misProductos.obtener();
const formBusqueda = document.querySelector("#searchForm");
const inputBusqueda = document.querySelector("#searchInput");

formBusqueda.addEventListener("submit", function (event) {
  event.preventDefault();

  const terminoDeBusqueda = inputBusqueda.value.toLowerCase();
  console.log("Esto se envía al filtro:", terminoDeBusqueda);

  window.location.href = `resultBusqueda.html?q=${terminoDeBusqueda}`;
});
// 
// 
