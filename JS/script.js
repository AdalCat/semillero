document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var mensaje = "¡Hola, " + nombre + "! Gracias por visitar mi página web.";
    document.getElementById("mensaje").textContent = mensaje;
  });

function calcular() {
  var num1 = parseFloat(document.getElementById("numero1").value);
  var num2 = parseFloat(document.getElementById("numero2").value);
  var suma = num1 + num2;
  var resta = num1 - num2;
  var multiplicacion = num1 * num2;
  var division = num1 / num2;
  var resultado =
    "Suma: " +
    suma +
    ", Resta: " +
    resta +
    ", Multiplicación: " +
    multiplicacion +
    ", División: " +
    division;
  document.getElementById("resultado").textContent = resultado;
}

function calcular_rectagulo() {
  var altura = parseInt(document.getElementById("altura").value);
  var base = parseInt(document.getElementById("base").value);
  var area = base * altura;
  document.getElementById("resultado_area").textContent = area;
  console.log(area);
}

function calcular_triangulo() {
  var altura1 = parseInt(document.getElementById("altura1").value);
  var base1 = parseInt(document.getElementById("base1").value);
  var area1 = (base1 * altura1) / 2;
  document.getElementById("resultado_area1").textContent = area1;
  console.log(area1);
}

function Semillero_name() {
  const nombres = [
    "Enrique",
    "Jesus",
    "Gustavo",
    "Johann",
    "Hugo",
    "Luis",
    "Angel",
    "Ali",
  ];
  document
    .getElementById("Semillero_name")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var Nombre = document.getElementById("N_integrante").value;
      if (nombres.includes(Nombre)) {
        alert("Eres parte del semillero");
      } else {
        alert("No es parte del semillero");
      }
    });
}
Semillero_name();

document
  .getElementById("generadorContrasenas")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    generadorContrasenas();
  });

function generadorContrasenas() {
  let contrasena = "";
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let longitud = parseInt(document.getElementById("ncaracteres").value);
  for (let i = 0; i < longitud; i++) {
    contrasena += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  document.getElementById("contrasena").innerHTML = contrasena;
}
