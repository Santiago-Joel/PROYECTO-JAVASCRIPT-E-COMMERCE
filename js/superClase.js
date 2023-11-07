class Crud {
  static id = 1;
  constructor(variableRandom) {
    this.variableRandom = variableRandom;
    this.array = JSON.parse(localStorage.getItem(this.variableRandom)) || [];
  }
  //metodo para crear(create)
  crear(nuevoObjeto) {
    nuevoObjeto.id = this.myId();
    this.array = [...this.array, nuevoObjeto];
    arrayProductos =
      JSON.parse(localStorage.getItem(this.variableRandom)) || [];
    arrayProductos = this.array;
    localStorage.setItem(this.variableRandom, JSON.stringify(arrayProductos));
    console.log(arrayProductos);
  }
  myId() {
    return Crud.id++;
  }

  //metodo para leer(read)
  obtener() {
    return this.array;
  }

  //metodo para actualizar/modificar(update)
  actualizar(id, nuevoValor) {
    this.array.filter((obj, index) => {
      if (id == obj.id) {
        this.array[index] = nuevoValor;
      }
    });
    arrayProductos =
      JSON.parse(localStorage.getItem(this.variableRandom)) || [];
    arrayProductos = this.array;
    localStorage.setItem(this.variableRandom, JSON.stringify(arrayProductos));
  }

  //metodo para eliminar(delete)
  eliminar(id) {
    let nuevosDatos = this.array.filter((obj) => {
      if (id != obj.id) {
        return obj;
      }
    });
    arrayProductos =
      JSON.parse(localStorage.getItem(this.variableRandom)) || [];
    this.array = nuevosDatos;
    arrayProductos = this.array;
    localStorage.setItem(this.variableRandom, JSON.stringify(arrayProductos));
  }
}
let arrayProductos =
  JSON.parse(localStorage.getItem(this.variableRandom)) || [];
let usuarios = new Crud("Usuarios");
let misProductos = new Crud("misProductos");
