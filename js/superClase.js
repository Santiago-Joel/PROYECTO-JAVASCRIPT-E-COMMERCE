class Crud {
  static id = 1;
  constructor(variableRandom) {
    this.variableRandom = variableRandom;
    this.array = JSON.parse(localStorage.getItem(this.variableRandom)) || [];
    if (this.array.length > 0) {
        Crud.id = Math.max(...this.array.map(obj => obj.id)) + 1;
    }
}

  crear(nuevoObjeto) {
    nuevoObjeto.id = this.myId();
    this.array = [...this.array, nuevoObjeto];
    arrayProductos = this.array;
    localStorage.setItem(this.variableRandom, JSON.stringify(arrayProductos));
    console.log(arrayProductos);
}

  myId() {
    return Crud.id++;
  }

 
  obtener() {
    return this.array;
  }

 
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
