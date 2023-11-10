
let principal=document.querySelector("#principal");
principal.innerHTML=mostrarProductos(misProductos.obtener());

function actualizar(id) {
   let productos = misProductos.obtener();
   let [obj] = productos.filter(p=>{
    if (p.id==id){
        return p;
    }
   });
   modificarProductos(obj)
}



function agregarProductos() {
    return`
    <form id="agregar">
    <h3 class="text-white bg-primary text-center my-3">Agregar Productos</h3>
    <div class="form-group">
        <input type="text" name="nombre" id="nombre" placeholder="nombre">
    </div>
    <div class="form-group">
        <input type="text" name="src" id="src" placeholder="src">
    </div>
    <div class="form-group">
        <input type="text" name="descripcion" id="descripcion" placeholder="descripcion">
    </div>
    <div class="form-group">
        <input type="text" name="categoria" id="categoria" placeholder="categoria">
    </div>
    <div class="form-group">
        <input id="btn" class="btn btn-primary" type="button" value="Agregar" onclick="add()">
    </div>
    <div class="form-group">
    <a href="administrador.html" class="back-button">Volver</a>
    </div>
    <div class="form-group">
        <span></span>
    </div>
</form>
`;
}
function add() {
    let form = document.querySelector("#agregar");
    let [nombre,src,descripcion,categoria]=form;

    misProductos.crear({nombre:nombre.value,src:src.value,descripcion:descripcion.value,categoria:categoria.value})
    
}
const modificarProductos=(obj)=>{

    principal.innerHTML=  `<form id="editar">
    <h3 class="text-white bg-primary text-center my-3">Modificar Productos</h3>
    <div class="input">
        <input type="text" name="nombre" id="nombre" value="${obj.nombre}">
    </div>
    <div class="input">
        <input type="text" name="src" id="src" value="${obj.src}">
    </div>
    <div class="input">
    <input type="text" name="descripcion" id="descripcion" value="${obj.descripcion}">
    </div>
    <div class="input">
    <input type="text" name="categoria" id="categoria" value="${obj.categoria}">
    </div>
    <div class="input">
        <input id="btn" class="btn btn-primary" type="button" value="Modificar" onclick="procesarFormUpdate()">
    </div>
    <div class="input">
        <input id="btnVolver" class="back-button" type="button" value="Volver">
    </div>
    <div class="input">
        <span></span>
    </div>
</form>`;
document.querySelector("#btnVolver").addEventListener("click",function () {
    location.reload() 
    
})
document.querySelector("#editar").addEventListener('click',()=>{
    let nombre=document.querySelector("#nombre").value;
    let src=document.querySelector("#src").value;
    let descripcion=document.querySelector("#descripcion").value
    let categoria=document.querySelector("#categoria").value
    console.log(nombre,src,descripcion,categoria);
    console.log(obj.id);
    misProductos.actualizar(obj.id,{id:obj.id,nombre,src,descripcion,categoria});
    
})

}

function mostrarProductos(obj) {
    let productos = ``;
    obj.map((producto)=>{
        productos+= `<tr >
        <td><img class="imgProducto" src="${producto.src}"></td>
        <td><h3 class="text-black mx-3">${producto.nombre}</h3></td>
        <td><h3 class="text-black mx-3">${producto.descripcion}</h3></td>
        <td><h3 class="text-black mx-3">${producto.categoria}</h3></td>
        <td><button class="btn btn-primary"><a class="text-white"  href="./detalle.html?id=${producto.id}">Ver más</a></button></td>
        <td><button class="btn btn-success" onclick="actualizar(${producto.id})">Editar</button></td>
        <td><button class="btn btn-danger" onclick="eliminarProductos(${producto.id})">Borrar</button></td>
    </tr> `;
    })
    return `
    <section>
    <button id="add" class="btn btn-success m-4">Agregar Producto</button>
    <table class="m-4">
    <thead>
        <!--<tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Editar</th>
            <th>Borrar</th>
        </tr>-->
    </thead>
    <tbody>
        ${productos}
    </tbody>
   </table>
   </section>
    `
}

function eliminarProductos(id) {
    misProductos.eliminar(id);
}
document.querySelector("#add").addEventListener('click',function () {
    principal.innerHTML=agregarProductos()
})


