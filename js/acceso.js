(function () {
    let formulario = document.querySelector("#acceso");
  
    let usuarios = [
      { email: "santiago@gmail.com", password: "12345678", admin: true },
      { email: "lisandro@gmail.com", password: "12345678", admin: false },
    ];
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      let [email, password] = formulario.elements;
      let usuario = { email: email.value, password: password.value };
  
      if (usuario.email == "" || usuario.password == "") {
        let span = document.querySelector("#msg");
        span.style.backgroundColor = "white";
        span.style.color = "red";
        span.style.display = "block";
        span.innerText = `
          Alguno de los campos está vacío!
          `;
        setTimeout(() => {
          span.style.display = "none";
        }, 2000);
      } else {
        let ingreso = acceso(usuario, usuarios);
  
        if (ingreso) {
          this.submit();
        } else {
          let span = document.querySelector("#msg");
          span.style.backgroundColor = "white";
          span.style.color = "red";
          span.style.display = "block";
          span.innerText = `
          Usuario o contraseña incorrecto!
          `;
          setTimeout(() => {
            span.style.display = "none";
          }, 2000);
        }
      }
    });
  
    function acceso(obj, array) {
        let accede = false;
        for (let i = 0; i < array.length; i++) {
          if (array[i].email == obj.email && array[i].password == obj.password) {
            sessionStorage.setItem("user", JSON.stringify(array[i]));
            return (accede = true);
          }
        }
        return accede;
      }
      
  })();
  